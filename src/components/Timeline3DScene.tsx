"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { extend } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, Environment, Stars, Float, Html } from "@react-three/drei";
import { cn } from "@/lib/utils";

extend({ Water });

const islandPositions: [number, number, number][] = [
  [0, 0, 0],
  [200, 0, -400],
  [-200, 0, -800],
  [200, 0, -1200],
  [0, 0, -1600],
];

function Ocean() {
  const ref = useRef<Water>(null);
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const waterNormals = useMemo(() => new THREE.TextureLoader().load(
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/waternormals.jpg",
    (tex) => {
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    }
  ), []);

  const water = useMemo(() => {
    return new Water(geom, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(1, 1, 1).normalize(),
      sunColor: 0xffffff,
      waterColor: 0x004466,
      distortionScale: 3.7,
      fog: false,
    });
  }, [geom, waterNormals]);

  useFrame((state, delta) => {
    if (ref.current) {
      (ref.current.material as THREE.ShaderMaterial).uniforms["time"].value += 0.5 * delta;
    }
  });

  return (
    <primitive
      ref={ref}
      object={water}
      rotation-x={-Math.PI / 2}
      position={[0, -2, 0]}
    />
  );
}

function IslandWithTimeline({ position, event, index }: { position: [number, number, number], event: any, index: number }) {
  const { scene } = useGLTF("/models/Island-Final.glb");
  const clone = useMemo(() => scene.clone(), [scene]);

  return (
    <group position={position}>
      {/* Island Model */}
      <primitive object={clone} scale={[30, 30, 30]} />
      
      {/* "Planet" / Glowing Orb */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 40, 0]}>
          <sphereGeometry args={[8, 32, 32]} />
          <meshStandardMaterial 
            color={event.accent} 
            emissive={event.accent} 
            emissiveIntensity={2} 
            transparent 
            opacity={0.9} 
          />
          <pointLight color={event.accent} intensity={100} distance={200} />
        </mesh>
      </Float>

      {/* Floating Timeline Card in 3D Space above the Island */}
      <Html
        position={[0, 80, 0]}
        center
        transform
        sprite // Always face the camera
        distanceFactor={200} // Scale down as camera moves away
        className="pointer-events-none"
      >
        <div 
          className="w-[400px] rounded-xl backdrop-blur-md border p-6 flex flex-col items-center text-center transition-all"
          style={{ 
            background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(${event.accentRgb},0.2) 100%)`, 
            borderColor: `rgba(${event.accentRgb}, 0.5)`,
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 30px rgba(${event.accentRgb}, 0.2)`
          }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-black flex items-center justify-center font-pirata text-xl" style={{ backgroundColor: event.accent, color: "black" }}>
            {index + 1}
          </div>
          <h3 className="text-5xl font-pirata mt-4 mb-2" style={{ color: event.accent, textShadow: `0 0 10px rgba(${event.accentRgb}, 0.5)` }}>
            {event.day} {event.month}
          </h3>
          <h4 className="text-2xl font-pirata text-[#f0e6d2] mb-3">{event.title}</h4>
          <p className="text-base text-[#94a3b8] font-crimson">{event.description}</p>
        </div>
      </Html>
    </group>
  );
}

function Ship({ scrollProgress }: { scrollProgress: number }) {
  const { scene } = useGLTF("/models/Ship.glb");
  const shipRef = useRef<THREE.Group>(null);

  const path = useMemo(() => {
    const points = islandPositions.map(p => new THREE.Vector3(...p));
    // Use CatmullRomCurve3 for a smooth sailing path through the islands
    return new THREE.CatmullRomCurve3(points);
  }, []);

  useFrame((state) => {
    if (shipRef.current) {
      // Map scroll progress (0 to 1) to the path
      const t = Math.max(0, Math.min(0.999, scrollProgress));
      const pos = path.getPoint(t);
      const lookAtPos = path.getPoint(Math.min(t + 0.01, 1));
      
      // Move ship
      shipRef.current.position.copy(pos);
      // Make ship face forward along the path
      shipRef.current.lookAt(lookAtPos);
      
      // Add a slight bobbing motion to the ship
      shipRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 2;
      shipRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      shipRef.current.rotation.x += Math.sin(state.clock.elapsedTime * 1) * 0.05;

      // Camera follows closely behind and above the ship
      const cameraOffset = new THREE.Vector3(0, 80, 150);
      cameraOffset.applyQuaternion(shipRef.current.quaternion);
      const targetCamPos = shipRef.current.position.clone().add(cameraOffset);
      
      state.camera.position.lerp(targetCamPos, 0.1);
      state.camera.lookAt(shipRef.current.position.clone().add(new THREE.Vector3(0, 20, 0)));
    }
  });

  return (
    <group ref={shipRef}>
      <primitive object={scene} scale={[8, 8, 8]} />
    </group>
  );
}

export default function Timeline3DScene({ scrollProgress, events }: { scrollProgress: number, events: any[] }) {
  return (
    <div className="fixed inset-0 z-0 bg-[#00050a]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault fov={50} position={[0, 100, 200]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[100, 200, 100]} 
          intensity={2} 
          castShadow 
        />
        <pointLight position={[-100, 50, -100]} intensity={1} color="#4488ff" />
        
        <Environment preset="night" />
        <Stars radius={400} depth={50} count={8000} factor={6} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          <Ocean />
          
          {islandPositions.map((pos, i) => (
             <IslandWithTimeline key={i} index={i} position={pos} event={events[i]} />
          ))}
          
          <Ship scrollProgress={scrollProgress} />
        </Suspense>
        
        <fog attach="fog" args={["#00050a", 200, 2000]} />
      </Canvas>
    </div>
  );
}

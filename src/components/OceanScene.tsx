"use client";
import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { extend } from "@react-three/fiber";
import { Stars, PerspectiveCamera, Environment, useGLTF, Float } from "@react-three/drei";

extend({ Water });

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
      textureWidth: 256,
      textureHeight: 256,
      waterNormals,
      sunDirection: new THREE.Vector3(1, 1, 1).normalize(),
      sunColor: 0xffffff,
      waterColor: 0x0077be, // Vibrant blue
      distortionScale: 3.7,
      fog: true,
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
      position={[0, -5, 0]}
    />
  );
}

function Ship() {
  const { scene } = useGLTF("/models/Ship.glb");
  const shipRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (shipRef.current) {
      // Gentle bobbing and rocking
      shipRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2 - 2;
      shipRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      shipRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.02;
    }
  });

  return (
    <group ref={shipRef} position={[0, -2, -100]} rotation={[0, Math.PI / 4, 0]}>
      <primitive object={scene} scale={[5, 5, 5]} />
    </group>
  );
}

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function OceanScene() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className={`absolute inset-0 z-0 ${isDark ? "bg-[#00050a]" : "bg-[#87CEEB]"}`}>
      <Canvas shadows dpr={[1, 1]} performance={{ min: 0.5 }}>
        <PerspectiveCamera makeDefault fov={55} position={[0, 40, 100]} />
        
        {isDark ? (
          <>
            <ambientLight intensity={0.4} />
            <directionalLight 
              position={[100, 100, 50]} 
              intensity={1.5} 
              castShadow 
            />
            <pointLight position={[-50, 50, -50]} intensity={2} color="#0077ff" />
            <Environment preset="night" />
            <Stars radius={300} depth={60} count={10000} factor={7} saturation={0} fade speed={1.5} />
            <fog attach="fog" args={["#00050a", 100, 1000]} />
          </>
        ) : (
          <>
            {/* Bright ambient light for daylight */}
            <ambientLight intensity={1.2} />
            
            {/* Strong sun light */}
            <directionalLight 
              position={[100, 100, 50]} 
              intensity={3} 
              color="#ffffff"
              castShadow 
            />
            
            {/* Fill light */}
            <pointLight position={[-50, 50, -50]} intensity={1.5} color="#e0f7fa" />
            
            <Environment preset="city" />
            
            {/* Sky blue fog */}
            <fog attach="fog" args={["#87CEEB", 100, 1000]} />
          </>
        )}
        
        <Suspense fallback={null}>
          <Ocean />
          <Ship />
        </Suspense>
      </Canvas>
      
      {/* Light overlay for atmosphere */}
      <div 
        className={`absolute inset-0 pointer-events-none ${
          isDark 
            ? "bg-gradient-to-t from-[#00050a] via-transparent to-transparent opacity-60"
            : "bg-gradient-to-t from-[#4facfe] via-transparent to-transparent opacity-30"
        }`} 
      />
    </div>
  );
}


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, School, Plus, Trash2, QrCode, Upload, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const [formData, setFormData] = useState({
    leaderName: "",
    email: "",
    phone: "",
    college: "",
    transactionId: "",
  });
  
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [members, setMembers] = useState([{ name: "", email: "" }]);

  const addMember = () => {
    if (members.length < 3) {
      setMembers([...members, { name: "", email: "" }]);
    }
  };

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const updateMember = (index: number, field: string, value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentScreenshot) {
      setErrorMessage("Please upload your payment screenshot.");
      return;
    }
    if (!formData.transactionId) {
      setErrorMessage("Please enter the transaction ID.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Upload Image to Supabase Storage
      const fileExt = paymentScreenshot.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `screenshots/${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from("payments")
        .upload(filePath, paymentScreenshot);

      if (uploadError) {
        console.error("Supabase Storage Upload Error:", uploadError);
        throw new Error(`Failed to upload payment screenshot: ${uploadError.message}`);
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from("payments")
        .getPublicUrl(filePath);

      // 2. Insert record into registrations table
      const { error: dbError } = await supabase
        .from("registrations")
        .insert([
          {
            leader_name: formData.leaderName,
            leader_email: formData.email,
            leader_phone: formData.phone,
            leader_college: formData.college,
            transaction_id: formData.transactionId,
            payment_screenshot_url: publicUrl,
            members: members,
          }
        ]);

      if (dbError) throw new Error("Database error: Could not save registration.");

      setSubmitStatus("success");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center p-4 pt-28 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#082f49]">
        <Image src="/images/water-texture.png" alt="" fill className="object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden">
          
          {submitStatus === "success" ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-12">
              <CheckCircle2 className="w-24 h-24 text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
              <h2 className="text-4xl font-pirata text-amber-400 mb-4 tracking-widest">Registration Successful!</h2>
              <p className="text-white/70 font-crimson text-lg mb-8 max-w-md">Your voyage log has been recorded. The Captains will review your payment and contact you soon.</p>
              <Link href="/">
                <button className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-colors">Return to Shore</button>
              </Link>
            </motion.div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-pirata tracking-[0.2em] mb-4 uppercase">
                  {step === 1 ? "Phase I: Team Details" : "Phase II: Payment"}
                </div>
                <h1 className="text-4xl md:text-5xl font-pirata text-[#f0e6d2] tracking-widest mb-2 uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                  Join the Crew
                </h1>
                <p className="text-[#94a3b8] font-crimson text-sm md:text-base italic">
                  {step === 1 ? "Only the Captain (Leader) shall register the crew." : "Scan to pay and seal the pact."}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.form key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-4">
                      <h3 className="text-amber-500 font-pirata text-xl uppercase">Captain's Log (Leader)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">Name</label>
                          <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-500/50 outline-none" value={formData.leaderName} onChange={(e) => setFormData({...formData, leaderName: e.target.value})} />
                        </div>
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">Email</label>
                          <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-500/50 outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">Phone</label>
                          <input required type="tel" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-500/50 outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                        </div>
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">College</label>
                          <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-500/50 outline-none" value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})} />
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-amber-500 font-pirata text-xl uppercase">The Crew (Members)</h3>
                        {members.length < 3 && (
                          <button type="button" onClick={addMember} className="flex items-center gap-1 text-xs font-pirata tracking-widest text-white/70 hover:text-amber-400 uppercase">
                            <Plus size={14} /> Add Mate
                          </button>
                        )}
                      </div>
                      {members.map((member, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                          <div className="flex-1 w-full space-y-1">
                            <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">Member {idx + 1} Name</label>
                            <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white outline-none" value={member.name} onChange={(e) => updateMember(idx, "name", e.target.value)} />
                          </div>
                          <div className="flex-1 w-full space-y-1">
                            <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">Member {idx + 1} Email</label>
                            <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white outline-none" value={member.email} onChange={(e) => updateMember(idx, "email", e.target.value)} />
                          </div>
                          {idx > 0 && (
                            <button type="button" onClick={() => removeMember(idx)} className="p-2 text-red-400 hover:text-red-500 transition-colors">
                              <Trash2 size={20} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <button type="submit" className="w-full relative px-6 py-4 font-pirata text-xl font-bold transition-all duration-300 rounded-xl hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_-5px_rgba(245,158,11,0.3)] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] bg-[length:200%_100%]">
                      <span className="relative z-10 text-[#78350f] uppercase tracking-[0.2em] drop-shadow-sm">Proceed to Payment</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.form key="step2" onSubmit={handleFinalSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col items-center text-center space-y-6">
                    <div className="p-4 bg-white rounded-2xl shadow-2xl relative w-64 h-64 border-4 border-amber-500 overflow-hidden">
                      <Image 
                        src="/whatsapp-qr.jpeg" 
                        alt="Payment QR Code" 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2" 
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-pirata text-white mb-2">Scan & Pay ₹200</h3>
                      <p className="text-white/50 font-crimson">Please scan the QR code above using any UPI app to complete your registration.</p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="w-full space-y-1 text-left">
                        <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">Transaction ID</label>
                        <input required type="text" placeholder="Enter UPI Ref No." className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500/50 outline-none" value={formData.transactionId} onChange={(e) => setFormData({...formData, transactionId: e.target.value})} />
                      </div>

                      <div className="w-full space-y-1 text-left">
                        <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">Upload Screenshot</label>
                        <div className="relative">
                          <input required type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => { if(e.target.files && e.target.files[0]) setPaymentScreenshot(e.target.files[0]) }} />
                          <div className="w-full bg-black/40 border border-white/10 border-dashed rounded-lg px-4 py-3 flex items-center justify-between text-white/50 hover:bg-black/60 transition-colors">
                            <span className="truncate max-w-[150px]">{paymentScreenshot ? paymentScreenshot.name : "Choose image..."}</span>
                            <Upload size={18} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}

                    <div className="flex w-full gap-4 pt-4">
                      <button type="button" disabled={isSubmitting} onClick={() => setStep(1)} className="px-6 py-3 border border-white/20 text-white rounded-xl font-pirata hover:bg-white/5 transition-colors disabled:opacity-50">Back</button>
                      <button type="submit" disabled={isSubmitting} className="flex-1 flex items-center justify-center bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-xl font-pirata text-xl uppercase tracking-widest hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100">
                        {isSubmitting ? "Uploading..." : "Submit Registration"}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-center">
                <Link href="/" className="text-white/40 hover:text-white transition-colors font-crimson text-sm uppercase tracking-widest">← Return to Shore</Link>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((res) => setTimeout(res, 600));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
      <div className="container max-w-4xl mx-auto space-y-12">
        {/* Section Label */}
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            05 / Communication
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg">
            Direct communication channels for engineering roles, project inquiries, or technical discussion.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct channels */}
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3.5 p-4 rounded-xl dark-panel border border-white/[0.08] hover:border-white/[0.18] transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-white/[0.04] text-zinc-300 group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase text-zinc-500">Email Address</p>
                <p className="text-sm font-medium text-white">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-3.5 p-4 rounded-xl dark-panel border border-white/[0.08] hover:border-white/[0.18] transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-white/[0.04] text-zinc-300 group-hover:text-white transition-colors">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase text-zinc-500">Phone</p>
                <p className="text-sm font-medium text-white">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-3.5 p-4 rounded-xl dark-panel border border-white/[0.08]">
              <div className="p-2.5 rounded-lg bg-white/[0.04] text-zinc-300">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase text-zinc-500">Location</p>
                <p className="text-sm font-medium text-white">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Clean Message Box */}
          <div className="dark-panel p-6 rounded-xl border border-white/[0.08]">
            {submitted ? (
              <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 size={28} className="text-emerald-400 mx-auto" />
                <p className="text-sm font-semibold text-white">Message dispatched</p>
                <p className="text-xs text-zinc-400">
                  Thank you. I will reply directly to your email address shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#090a0f] border border-white/[0.1] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#090a0f] border border-white/[0.1] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    placeholder="Hello Tarun, I'd like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#090a0f] border border-white/[0.1] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-400 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-xs font-semibold py-2.5 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

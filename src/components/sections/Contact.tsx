"use client";
import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle, ChevronDown } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: ""
  });

  const services = [
    "Custom Website Development",
    "Social Media Advertising",
    "Branding & Promotions",
    "Content Creation",
    "Digital Marketing",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service: service });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", phone: "", service: "Web Development", message: "" });
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <TextReveal className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 justify-center">
            Let's Build the Future
          </TextReveal>
          <p className="text-muted-foreground">
            Have a project in mind? We are ready to scale it.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-3xl shadow-2xl">
          {formState === "success" ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-6 text-sm text-cyan-500 hover:text-cyan-400 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-muted-foreground"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="raju@company.com"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Phone <span className="text-zinc-600 normal-case">(Optional)</span>
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 1212 121212"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* --- CUSTOM DROPDOWN START --- */}
              <div className="space-y-2 relative">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Service Interest</label>

                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground flex justify-between items-center hover:border-border/80 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <span className={formData.service ? "text-foreground" : "text-muted-foreground"}>
                    {formData.service}
                  </span>
                  <ChevronDown size={18} className={`text-zinc-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu (Only shows when open) */}
                {isDropdownOpen && (
                  <>
                    {/* Invisible backdrop to close when clicking outside */}
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />

                    <div className="absolute z-20 w-full mt-2 bg-card border border-border rounded-xl overflow-hidden shadow-xl animate-in fade-in zoom-in-95 duration-200">
                      {services.map((service, index) => (
                        <div
                          key={index}
                          onClick={() => handleServiceSelect(service)}
                          className="px-4 py-3 text-muted-foreground hover:bg-accent hover:text-cyan-400 cursor-pointer transition-colors text-sm"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {/* --- CUSTOM DROPDOWN END --- */}

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-muted-foreground resize-none"
                />
              </div>

              {formState === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm justify-center bg-red-500/10 p-2 rounded-lg">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Request <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, KeyRound, X, CheckCircle2, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

interface AdminLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (password: string) => boolean;
}

export function AdminLoginModal({ isOpen, onClose, onLogin }: AdminLoginModalProps) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(false);

        if (!password.trim()) {
            setError(true);
            return;
        }

        const success = onLogin(password);
        if (success) {
            toast.success("Admin mode unlocked successfully!");
            setPassword("");
            onClose();
        } else {
            setError(true);
            toast.error("Incorrect Admin password. (Default: admin123)");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 md:p-8"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center text-center mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                                <Lock className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold tracking-tight">Admin Access</h2>
                            <p className="text-sm text-muted-foreground mt-1">
                                Enter the secret passcode to manage, edit, or publish blog posts.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                    Admin Password
                                </label>
                                <div className="relative">
                                    <KeyRound className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (error) setError(false);
                                        }}
                                        placeholder="Enter passcode..."
                                        className={`w-full pl-11 pr-4 py-3 bg-muted/30 border rounded-xl outline-none transition-all ${
                                            error
                                                ? "border-destructive focus:ring-1 focus:ring-destructive"
                                                : "border-border/80 focus:border-primary focus:ring-1 focus:ring-primary"
                                        }`}
                                        autoFocus
                                    />
                                </div>
                                {error && (
                                    <div className="flex items-center gap-1.5 text-destructive text-xs mt-2">
                                        <ShieldAlert className="w-3.5 h-3.5" />
                                        <span>Invalid passcode. Default password is <code className="bg-destructive/10 px-1 rounded font-mono">admin123</code></span>
                                    </div>
                                )}
                            </div>

                            <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-xs text-muted-foreground">
                                <span className="font-semibold text-primary">Default Admin Password: </span>
                                <code className="font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded">admin123</code>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 py-3 border border-border/80 hover:bg-muted/50 rounded-xl font-medium text-sm transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium text-sm transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                >
                                    <CheckCircle2 className="w-4 h-4" />
                                    Unlock Admin
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

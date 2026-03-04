"use client";

import { useState } from "react";

export function EmailCapture() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
        if (!url) {
            console.error("Missing NEXT_PUBLIC_GOOGLE_SHEETS_URL in environment variables.");
            setStatus("error");
            return;
        }

        setStatus("loading");

        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("timestamp", new Date().toISOString());

            await fetch(url, {
                method: "POST",
                body: formData,
                mode: "no-cors",
            });

            setStatus("success");
            setEmail("");
        } catch (error) {
            console.error("Failed to submit email:", error);
            setStatus("error");
        }
    };

    return (
        <div className="w-full max-w-md mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50"
                />
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? "Joining..." : status === "success" ? "Joined!" : "Join Early Access"}
                </button>
            </form>
            {status === "success" && (
                <p className="text-green-400 text-sm mt-3 text-center sm:text-left">
                    Thank you! You've been added to the early access list.
                </p>
            )}
            {status === "error" && (
                <p className="text-red-400 text-sm mt-3 text-center sm:text-left">
                    Something went wrong. Please try again or check console logs.
                </p>
            )}
        </div>
    );
}

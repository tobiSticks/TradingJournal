import { EmailCapture } from "./EmailCapture";

export function FooterCTA() {
    return (
        <section className="py-24 px-6 relative overflow-hidden border-t border-white/5">
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to trade with data?
                </h2>
                <p className="text-lg text-gray-400 mb-10 text-balance">
                    Join the early access list to be the first to know when we launch. Stop guessing which strategy works.
                </p>

                <EmailCapture />
            </div>
        </section>
    );
}

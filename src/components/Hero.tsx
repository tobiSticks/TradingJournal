import { EmailCapture } from "./EmailCapture";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Subtle background glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-3xl flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
                    Know Exactly Which Trading Strategy Makes You Money.
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl text-balance">
                    Stop guessing. Track your trades, log your setups, and let us automatically calculate the win rate of every approach you trade.
                </p>

                <EmailCapture />
                <p className="text-sm text-gray-500 mt-4 hidden sm:block">
                    No credit card required. Only serious traders.
                </p>
            </div>
        </section>
    );
}

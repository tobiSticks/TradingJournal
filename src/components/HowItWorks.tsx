export function HowItWorks() {
    const steps = [
        {
            step: 1,
            title: "Define your strategy",
            description: "Map out your entry rules, exit rules, and risk management parameters once.",
        },
        {
            step: 2,
            title: "Log your setups",
            description: "When you take a trade, simply tag it with the strategy it belongs to in seconds.",
        },
        {
            step: 3,
            title: "Know your edge",
            description: "Instantly see the win rate, profit factor, and expectancy calculation for that specific system.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
                    How it works
                </h2>

                <div className="flex flex-col md:flex-row gap-8 relative w-full">
                    {/* Connecting line for desktop */}
                    <div className="absolute top-8 left-12 right-12 h-[1px] bg-white/10 hidden md:block z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 rounded-full bg-black border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mb-6">
                                {step.step}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

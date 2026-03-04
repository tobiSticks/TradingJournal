export function Problem() {
    const problems = [
        {
            title: "Inconsistent Journaling",
            description: "You start strong but abandon your journal after a few red days, losing valuable data.",
        },
        {
            title: "Vague Notes, No Clarity",
            description: "Writing 'traded well today' doesn't help you identify which specific setups are profitable.",
        },
        {
            title: "Strategy Blindspots",
            description: "You trade 3 different strategies but have no idea which one is actually funding your account.",
        },
        {
            title: "Emotional Decision Making",
            description: "Without hard win rate data, you rely on gut feelings instead of statistics when entering trades.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    The problem with existing trading journals
                </h2>
                <p className="text-gray-400 max-w-2xl mb-16 text-lg">
                    Most traders fail because they don't treat their trading like a data-driven business. Traditional journaling is tedious and provides zero actionable insights.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="bg-black/40 border border-white/5 p-8 rounded-2xl flex flex-col text-left hover:border-white/10 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                                <span className="text-red-500 font-bold">0{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

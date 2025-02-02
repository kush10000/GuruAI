export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Define Your Goals",
      description:
        "Share your career aspirations and current skills through our AI-powered system for initial analysis.",
      color: "bg-blue-500",
    },
    {
      number: "2",
      title: "Get Personalized Roadmap",
      description: "Receive a tailored learning path with course recommendations and skill priorities.",
      color: "bg-purple-500",
    },
    {
      number: "3",
      title: "Learn Efficiently",
      description: "Access curated resources, including courses, projects, and practice materials.",
      color: "bg-green-500",
    },
    {
      number: "4",
      title: "Track & Improve",
      description: "Monitor your progress, showcase your achievements, and continuously refine your learning journey.",
      color: "bg-pink-500",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gray-100 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-400">Transform your learning journey in four simple steps</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div
                className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4`}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


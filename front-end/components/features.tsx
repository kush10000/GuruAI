import { Lightbulb, Book, HelpCircle, Check } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-400">Everything you need to enhance your online learning experience</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <Lightbulb className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Comprehensive Career Roadmaps</h3>
            <p className="text-gray-400 mb-6">
              Tailored learning paths with skill prioritization and time-saving recommendations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Customized skill sequences</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Time-saving topic suggestions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Flexible learning schedules</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-6">
              <Book className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Personalized Course Suggestions</h3>
            <p className="text-gray-400 mb-6">
              Find the perfect courses based on your learning style, available time, and career goals.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Learning style matching</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Time-based recommendations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Top-rated course prioritization</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="bg-green-500/20 p-3 rounded-lg w-fit mb-6">
              <HelpCircle className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Practical Learning Support</h3>
            <p className="text-gray-400 mb-6">
              Enhance your skills with project ideas, practice resources, and productivity tips.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Tailored project recommendations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Certification guidance</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Productivity tool suggestions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


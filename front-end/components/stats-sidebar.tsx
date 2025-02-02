import { Award, Book, Briefcase, Code, Zap } from "lucide-react"

export function StatsSidebar() {
  const stats = [
    { label: "Courses Completed", value: 12, icon: Book },
    { label: "Skills Learned", value: 24, icon: Zap },
    { label: "Projects Made", value: 8, icon: Code },
    { label: "Certifications Earned", value: 3, icon: Award },
    { label: "Career Goals Met", value: 2, icon: Briefcase },
  ]

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-3">
              <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


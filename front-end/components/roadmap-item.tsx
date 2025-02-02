import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RoadmapItemProps {
  title: string
  courses: Array<{ title: string; description: string }>
  resources: Array<{ title: string; link: string }>
  projects: Array<{ title: string; description: string }>
  onPersonalize: (type: "course" | "resource" | "project", title: string, description?: string) => void
}

export function RoadmapItem({ title, courses, resources, projects, onPersonalize }: RoadmapItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative pl-8 pb-4">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500" />

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 py-2 text-left hover:text-blue-500 transition-colors"
      >
        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        <span className="font-medium">{title}</span>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4 ml-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recommended Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPersonalize("course", course.title, course.description)}
                  >
                    Personalize
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {resources.map((resource, index) => (
                <div key={index} className="flex justify-between items-center">
                  <a
                    href={resource.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.title}
                  </a>
                  <Button variant="outline" size="sm" onClick={() => onPersonalize("resource", resource.title)}>
                    Details
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Ideas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{project.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPersonalize("project", project.title, project.description)}
                  >
                    Guide
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}


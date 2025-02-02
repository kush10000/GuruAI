"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { RoadmapItem } from "@/components/roadmap-item"
import { AiChat } from "@/components/ai-chat"
import { StatsSidebar } from "@/components/stats-sidebar"
import { PersonalizationSidebar } from "@/components/personalization-sidebar"

const SAMPLE_ROADMAP_DATA = [
  {
    title: "Fundamentals of Programming",
    courses: [
      {
        title: "Python for Beginners",
        description: "Learn Python basics with hands-on exercises",
      },
      {
        title: "Programming Logic",
        description: "Master programming concepts and problem-solving",
      },
    ],
    resources: [
      { title: "Python Documentation", link: "#" },
      { title: "Coding Practice Platform", link: "#" },
    ],
    projects: [
      {
        title: "Calculator App",
        description: "Build a simple calculator to practice basic programming concepts",
      },
    ],
  },
  {
    title: "Web Development Basics",
    courses: [
      {
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development",
      },
      {
        title: "JavaScript Essentials",
        description: "Master JavaScript programming",
      },
    ],
    resources: [
      { title: "MDN Web Docs", link: "#" },
      { title: "Frontend Practice", link: "#" },
    ],
    projects: [
      {
        title: "Personal Portfolio",
        description: "Create your own portfolio website",
      },
    ],
  },
  {
    title: "Advanced Frontend Development",
    courses: [
      {
        title: "React Complete Guide",
        description: "Master modern React development",
      },
      {
        title: "State Management",
        description: "Learn Redux and other state management solutions",
      },
    ],
    resources: [
      { title: "React Documentation", link: "#" },
      { title: "Component Libraries", link: "#" },
    ],
    projects: [
      {
        title: "Task Management App",
        description: "Build a full-featured task management application",
      },
    ],
  },
]

export default function BuildPage() {
  const [selectedItem, setSelectedItem] = useState<{
    type: "course" | "resource" | "project"
    title: string
    description?: string
  } | null>(null)

  const handlePersonalize = (type: "course" | "resource" | "project", title: string, description?: string) => {
    setSelectedItem({ type, title, description })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Navbar userName="John Doe" />
      <div className="flex flex-1 pt-16">
        <div className="fixed left-0 top-16 bottom-0 w-64">
          <StatsSidebar />
        </div>
        <main className="flex-1 p-6 overflow-y-auto ml-64 mr-64">
          <h1 className="text-2xl font-bold mb-6">Your Learning Roadmap</h1>
          <div className="space-y-6">
            {SAMPLE_ROADMAP_DATA.map((item, index) => (
              <RoadmapItem key={index} {...item} onPersonalize={handlePersonalize} />
            ))}
          </div>
        </main>
        <div className="fixed right-0 top-16 bottom-0 w-64">
          <PersonalizationSidebar selectedItem={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
      </div>
      <AiChat />
    </div>
  )
}


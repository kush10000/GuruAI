"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, BookOpen, Calendar, Award } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function Hero() {
  const [name, setName] = useState("")
  const [professionGoal, setProfessionGoal] = useState("")
  const [skills, setSkills] = useState("")

  const isFormComplete = name && professionGoal && skills

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-900/20 dark:to-purple-900/20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            Your AI-Powered Learning Companion
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Enhance your online learning experience with AI-powered guidance, tailored course recommendations, and
            practical project ideas.
          </p>
          <div className="space-y-4">
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Select onValueChange={setProfessionGoal}>
              <SelectTrigger>
                <SelectValue placeholder="Select Profession Goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software-developer">Software Developer</SelectItem>
                <SelectItem value="data-scientist">Data Scientist</SelectItem>
                <SelectItem value="ux-designer">UX Designer</SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Your Skills (comma-separated)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <Button
              size="lg"
              asChild
              disabled={!isFormComplete}
              title={!isFormComplete ? "Please fill in all fields to continue" : ""}
            >
              <Link href={`/build?professionalGoals=${professionGoal}&skills=${skills}`}>Start Learning Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-6 bg-white/50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-4 p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
            <Lightbulb className="w-8 h-8 text-blue-400" />
            <p>AI-powered learning path analysis</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <p>Personalized course recommendations</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
            <Calendar className="w-8 h-8 text-green-400" />
            <p>Tailored project ideas and practice resources</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
            <Award className="w-8 h-8 text-yellow-400" />
            <p>Certification and skill tracking</p>
          </div>
        </div>
      </div>
    </div>
  )
}


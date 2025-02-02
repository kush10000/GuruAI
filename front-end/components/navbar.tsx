import Link from "next/link"
import { Bell, Newspaper, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
  userName?: string
}

export function Navbar({ userName }: NavbarProps) {
  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            GuruAI
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="#how-it-works" className="hover:text-gray-300">
              How It Works
            </Link>
            <Link href="#features" className="hover:text-gray-300">
              Features
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Newspaper className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>New Python Course Added</DropdownMenuItem>
                <DropdownMenuItem>Updated React Resources</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Daily Goal Reminder</DropdownMenuItem>
                <DropdownMenuItem>New Course Recommendation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Preferences</DropdownMenuItem>
                <DropdownMenuItem>Notifications</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
            {userName && <span className="text-sm font-medium text-gray-200">Welcome, {userName}</span>}
          </div>
        </div>
      </div>
    </nav>
  )
}


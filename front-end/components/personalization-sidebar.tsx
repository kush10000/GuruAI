import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface PersonalizationSidebarProps {
  selectedItem: {
    type: "course" | "resource" | "project"
    title: string
    description?: string
  } | null
  onClose: () => void
}



export function PersonalizationSidebar({ selectedItem, onClose }: PersonalizationSidebarProps) {
  const [data, setData] = useState(null);

          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get(`http://localhost:3001/api/personalize`, {
                  headers: {
                    'goal': 'Data-Science',
                    'known-skills': 'Python,django,sql'
                  }
                });
                setData(response.data);
              } catch (error) {
                console.error('Error fetching personalization data:', error);
              }
            };

            fetchData();
          }, [selectedItem]);
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Personalization</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      {selectedItem ? (
        <div>
          <h3 className="font-medium mb-2">{selectedItem.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{selectedItem.description}</p>

          {data && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Personalized Recommendations:</h4>
              <div className="space-y-2">
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} className={`text-sm p-2 rounded ${value === 'skip' ? 'bg-gray-700' : 'bg-green-700' }`}>
                    {key}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {selectedItem.type === "course" && (
            <div>
              <h4 className="font-medium mb-2">Recommended Next Steps:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Review prerequisites</li>
                <li>Set a study schedule</li>
                <li>Join study groups</li>
                <li>Practice with coding exercises</li>
              </ul>
            </div>
          )}
          {selectedItem.type === "resource" && (
            <div>
              <h4 className="font-medium mb-2">How to Use This Resource:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Skim through the content</li>
                <li>Take notes on key concepts</li>
                <li>Apply learnings to your projects</li>
                <li>Discuss with peers or mentors</li>
              </ul>
            </div>
          )}
          {selectedItem.type === "project" && (
            <div>
              <h4 className="font-medium mb-2">Project Tips:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Break down into smaller tasks</li>
                <li>Set milestones and deadlines</li>
                <li>Seek feedback regularly</li>
                <li>Document your process</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">Select an item to personalize</p>
      )}
    </div>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import axios from "axios";

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")

  const handleSend = async () => {
    if (!input.trim()) return;
    const messageToSend = input;
    const newMessages: { role: "user" | "assistant"; content: string }[] = [
      ...messages,
      { role: "user", content: messageToSend }
    ];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.get("http://localhost:3001/api/assistant", {
        headers: { message: messageToSend }
      });
      const assistantContent = response.data.response;
      console.log("Assistant response:", assistantContent);
      setMessages([...newMessages, { role: "assistant", content: assistantContent }]);
    } catch (error) {
      console.error("Error fetching assistant response:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Error: Unable to get response from AI assistant." }
      ]);
    }
  }

  return (
    <>
      <Button
        size="lg"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[400px] sm:w-[540px] h-full flex flex-col">
          <SheetHeader>
            <SheetTitle>AI Assistant</SheetTitle>
          </SheetHeader>

          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4 py-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex items-center gap-2 pt-4">
            <Textarea
              placeholder="Ask anything about your project..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[80px]"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}


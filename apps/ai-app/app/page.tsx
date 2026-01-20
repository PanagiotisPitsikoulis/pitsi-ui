"use client"

import { useChat } from "ai/react"
import { Send } from "lucide-react"
import TextareaAutosize from "react-textarea-autosize"

import { cn } from "@/lib/utils"

export default function HomePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat()

  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-border bg-background/80 sticky top-0 z-10 border-b backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-semibold">AI Chat</h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="container mx-auto max-w-3xl space-y-4">
          {messages.length === 0 ? (
            <div className="text-muted-foreground flex flex-col items-center justify-center py-16 text-center">
              <p className="text-lg">Start a conversation with AI</p>
              <p className="mt-2 text-sm">
                Type a message below to get started
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="border-border bg-background sticky bottom-0 border-t px-4 py-4">
        <form
          onSubmit={handleSubmit}
          className="container mx-auto flex max-w-3xl items-end gap-2"
        >
          <TextareaAutosize
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="border-border bg-muted focus:ring-primary flex-1 resize-none rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            maxRows={5}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
              }
            }}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground rounded-xl p-3 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </main>
  )
}

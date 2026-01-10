"use client"

import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

interface ContactBlockProps {
  content?: {
    title?: string
    description?: string
    subjects?: string[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact4Defaults = {
  title: "Contact Us",
  description:
    "Fill out the form below and we'll get back to you as soon as possible.",
  subjects: [
    "General Inquiry",
    "Sales",
    "Support",
    "Partnership",
    "Press",
    "Other",
  ],
}

export function Contact4({ content = {}, classNames = {} }: ContactBlockProps) {
  const {
    title = contact4Defaults.title,
    description = contact4Defaults.description,
    subjects = contact4Defaults.subjects,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mx-auto max-w-xl">
          <BlockHeader
            title={title}
            description={description}
            spacing="compact"
            className="mb-8"
            classNames={classNames.header}
          />

          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-foreground text-sm font-medium"
                >
                  First Name
                </label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-foreground text-sm font-medium"
                >
                  Last Name
                </label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-foreground text-sm font-medium"
              >
                Email
              </label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-foreground text-sm font-medium"
              >
                Subject
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject, i) => (
                    <SelectItem key={i} value={subject.toLowerCase()}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-foreground text-sm font-medium"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us what you need help with..."
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>

            <p className="text-muted-foreground text-center text-xs">
              By submitting this form, you agree to our{" "}
              <a href="#" className="underline hover:no-underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:no-underline">
                Terms of Service
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface TeamBlockProps {
  content?: {
    title?: string
    description?: string
    departments?: Array<{
      name: string
      members: Array<{
        name: string
        role: string
        linkedin?: string
      }>
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const team7Defaults = {
  title: "Our Team",
  description: "The people behind the product.",
  departments: [
    {
      name: "Leadership",
      members: [
        { name: "Sarah Johnson", role: "CEO & Co-founder", linkedin: "#" },
        { name: "Michael Chen", role: "CTO & Co-founder", linkedin: "#" },
        { name: "Emily Rodriguez", role: "COO", linkedin: "#" },
      ],
    },
    {
      name: "Engineering",
      members: [
        { name: "David Park", role: "VP of Engineering", linkedin: "#" },
        { name: "Lisa Wang", role: "Staff Engineer", linkedin: "#" },
        { name: "James Foster", role: "Senior Engineer", linkedin: "#" },
        { name: "Amanda Lee", role: "Senior Engineer", linkedin: "#" },
        { name: "Kevin Brown", role: "Engineer", linkedin: "#" },
      ],
    },
    {
      name: "Design",
      members: [
        { name: "Sophie Turner", role: "Head of Design", linkedin: "#" },
        { name: "Alex Kim", role: "Senior Product Designer", linkedin: "#" },
        { name: "Jordan Lee", role: "UX Researcher", linkedin: "#" },
      ],
    },
    {
      name: "Operations",
      members: [
        { name: "Rachel Green", role: "Head of Operations", linkedin: "#" },
        { name: "Chris Evans", role: "Customer Success", linkedin: "#" },
        { name: "Maria Garcia", role: "People Operations", linkedin: "#" },
      ],
    },
  ],
}

export function Team7({ content = {}, classNames = {} }: TeamBlockProps) {
  const {
    title = team7Defaults.title,
    description = team7Defaults.description,
    departments = team7Defaults.departments,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <BlockHeader
          title={title}
          description={description}
          align="left"
          spacing="compact"
          classNames={classNames.header}
        />

        <div className="space-y-12">
          {departments.map((dept, i) => (
            <div key={i}>
              <h3 className="text-foreground border-border mb-4 border-b pb-2 font-semibold">
                {dept.name}
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {dept.members.map((member, j) => (
                  <li
                    key={j}
                    className="group flex items-center justify-between py-2"
                  >
                    <div>
                      <span className="text-foreground font-medium">
                        {member.name}
                      </span>
                      <span className="text-muted-foreground ml-2 text-sm">
                        — {member.role}
                      </span>
                    </div>
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        className="text-muted-foreground hover:text-foreground opacity-0 transition-all group-hover:opacity-100"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

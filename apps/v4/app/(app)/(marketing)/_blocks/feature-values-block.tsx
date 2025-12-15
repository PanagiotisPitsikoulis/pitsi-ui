"use client"

import React from "react"

import { cn } from "@/lib/utils"

export interface FeatureValueItem {
  title: string
  description: string
}

export interface FeatureValuesBlockProps {
  headline?: string
  values?: FeatureValueItem[]
  className?: string
}

const defaultHeadline = "Our Values and Principles"
const defaultValues: FeatureValueItem[] = [
  {
    title: "Team Spirit",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.",
  },
  {
    title: "Innovation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.",
  },
  {
    title: "Quality",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.",
  },
  {
    title: "Integrity",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto atque consequuntur perferendis ratione dolorem vitae, doloribus facere.",
  },
]

export function FeatureValuesBlock({
  headline = defaultHeadline,
  values = defaultValues,
  className,
}: FeatureValuesBlockProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
            {headline}
          </h2>
          {values.map((value, index) => (
            <div key={index}>
              <h3 className="mb-2 text-xl font-medium">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

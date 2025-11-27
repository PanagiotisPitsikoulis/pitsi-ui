"use client"

import React from "react"

// to use the filter just add this to your layout.tsx
// <SkiperSquiCircleFilterLayout/>
// {children}

// on element you need to add squicircle just add the filter id SkiperSquiCircleFilter
//<div style={{filter: "url(#SquiCircleFilter)"}}></div>

// thats it you can use the filter now no extra rerenders no complications just pure css filter

export const SquiCircleFilterStatic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0"
      version="1.1"
    >
      <defs>
        <filter id="SkiperSquiCircleFilterLayout">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  )
}

const Skiper63 = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <SquiCircleFilter />
      <div
        className="bg-foreground rounded-2xl"
        style={{
          height: "200px",
          width: "300px",
          filter: "url(#SquiCircleFilter)",
        }}
      />
    </div>
  )
}

export { Skiper63 }

const SquiCircleFilter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0"
      version="1.1"
    >
      <defs>
        <filter id="SquiCircleFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  )
}

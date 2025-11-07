"use client"

import {
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/new-york-v4/ui/segmented-control"

export default function SegmentedControlCustom() {
  return (
    <SegmentedControl defaultValue="week">
      <SegmentedControlList
        className="w-fit rounded-full"
        floatingBgClassName="rounded-full"
      >
        <SegmentedControlTrigger value="day">Day</SegmentedControlTrigger>
        <SegmentedControlTrigger value="week">Week</SegmentedControlTrigger>
        <SegmentedControlTrigger value="month">Month</SegmentedControlTrigger>
        <SegmentedControlTrigger value="year">Year</SegmentedControlTrigger>
      </SegmentedControlList>
    </SegmentedControl>
  )
}

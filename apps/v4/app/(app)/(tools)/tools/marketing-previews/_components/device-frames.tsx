"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import type { DeviceColor, DeviceType, ShadowIntensity } from "./types"

// Shadow styles mapping
const SHADOW_STYLES: Record<ShadowIntensity, string> = {
  none: "",
  subtle: "drop-shadow-md",
  medium: "drop-shadow-xl",
  strong: "drop-shadow-2xl",
}

interface DeviceFrameBaseProps {
  children: React.ReactNode
  className?: string
  color?: DeviceColor
  shadowIntensity?: ShadowIntensity
}

// iPhone Frame - Modern bezel-less design with Dynamic Island
export function IPhoneFrame({
  children,
  className,
  color = "light",
  shadowIntensity = "medium",
}: DeviceFrameBaseProps) {
  const frameColor = color === "light" ? "#E5E5E7" : "#1D1D1F"
  const bezelColor = color === "light" ? "#FFFFFF" : "#000000"
  const dynamicIslandColor = "#000000"

  return (
    <div className={cn("relative inline-flex", SHADOW_STYLES[shadowIntensity], className)}>
      <svg
        viewBox="0 0 430 932"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        {/* Phone body with rounded corners */}
        <rect
          x="0"
          y="0"
          width="430"
          height="932"
          rx="68"
          ry="68"
          fill={frameColor}
        />
        {/* Inner bezel */}
        <rect
          x="8"
          y="8"
          width="414"
          height="916"
          rx="60"
          ry="60"
          fill={bezelColor}
        />
        {/* Screen area */}
        <rect
          x="14"
          y="14"
          width="402"
          height="904"
          rx="54"
          ry="54"
          fill="#000"
        />
        {/* Dynamic Island */}
        <rect
          x="140"
          y="24"
          width="150"
          height="36"
          rx="18"
          ry="18"
          fill={dynamicIslandColor}
        />
        {/* Side buttons - Volume */}
        <rect x="-2" y="180" width="4" height="40" rx="2" fill={frameColor} />
        <rect x="-2" y="240" width="4" height="80" rx="2" fill={frameColor} />
        <rect x="-2" y="340" width="4" height="80" rx="2" fill={frameColor} />
        {/* Side button - Power */}
        <rect x="428" y="280" width="4" height="100" rx="2" fill={frameColor} />

        {/* Content area - foreignObject for embedding children */}
        <foreignObject x="14" y="14" width="402" height="904">
          <div
            className="h-full w-full overflow-hidden"
            style={{ borderRadius: "54px" }}
          >
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

// MacBook Frame - Laptop with screen housing and base
export function MacBookFrame({
  children,
  className,
  color = "light",
  shadowIntensity = "medium",
}: DeviceFrameBaseProps) {
  const frameColor = color === "light" ? "#E5E5E7" : "#1D1D1F"
  const screenBezelColor = color === "light" ? "#2D2D2D" : "#000000"
  const baseColor = color === "light" ? "#D2D2D7" : "#161617"
  const keyboardColor = color === "light" ? "#B8B8BD" : "#0D0D0D"

  return (
    <div className={cn("relative inline-flex", SHADOW_STYLES[shadowIntensity], className)}>
      <svg
        viewBox="0 0 1200 780"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        {/* Screen housing */}
        <rect
          x="100"
          y="0"
          width="1000"
          height="650"
          rx="20"
          ry="20"
          fill={frameColor}
        />
        {/* Screen bezel */}
        <rect
          x="110"
          y="10"
          width="980"
          height="630"
          rx="12"
          ry="12"
          fill={screenBezelColor}
        />
        {/* Camera notch */}
        <rect
          x="540"
          y="16"
          width="120"
          height="28"
          rx="6"
          fill={screenBezelColor}
        />
        {/* Camera dot */}
        <circle cx="600" cy="28" r="5" fill="#2D2D2D" />
        <circle cx="600" cy="28" r="3" fill="#1A1A1A" />
        {/* Screen area */}
        <rect
          x="120"
          y="50"
          width="960"
          height="580"
          rx="4"
          fill="#000"
        />

        {/* Base/keyboard section */}
        <path
          d="M50 650 L100 650 L100 650 Q100 650 100 650 L1100 650 Q1100 650 1100 650 L1150 650 L1170 710 Q1175 730 1150 730 L50 730 Q25 730 30 710 Z"
          fill={baseColor}
        />
        {/* Keyboard area */}
        <rect
          x="120"
          y="660"
          width="960"
          height="50"
          rx="4"
          fill={keyboardColor}
        />
        {/* Trackpad */}
        <rect
          x="450"
          y="715"
          width="300"
          height="8"
          rx="2"
          fill={keyboardColor}
        />
        {/* Hinge line */}
        <rect x="100" y="648" width="1000" height="4" rx="1" fill={baseColor} />

        {/* Content area */}
        <foreignObject x="120" y="50" width="960" height="580">
          <div
            className="h-full w-full overflow-hidden"
            style={{ borderRadius: "4px" }}
          >
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

// Browser Frame - Window with traffic lights and address bar
export function BrowserFrame({
  children,
  className,
  color = "light",
  shadowIntensity = "medium",
}: DeviceFrameBaseProps) {
  const frameColor = color === "light" ? "#F5F5F7" : "#1D1D1F"
  const toolbarColor = color === "light" ? "#FFFFFF" : "#2D2D2D"
  const addressBarColor = color === "light" ? "#E8E8ED" : "#3D3D3D"
  const borderColor = color === "light" ? "#D1D1D6" : "#3D3D3D"
  const textColor = color === "light" ? "#86868B" : "#86868B"

  return (
    <div className={cn("relative inline-flex", SHADOW_STYLES[shadowIntensity], className)}>
      <svg
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        {/* Window background with border */}
        <rect
          x="0"
          y="0"
          width="1200"
          height="800"
          rx="12"
          ry="12"
          fill={frameColor}
          stroke={borderColor}
          strokeWidth="1"
        />
        {/* Toolbar area */}
        <rect
          x="1"
          y="1"
          width="1198"
          height="52"
          rx="11"
          fill={toolbarColor}
        />
        {/* Toolbar bottom border */}
        <line x1="0" y1="53" x2="1200" y2="53" stroke={borderColor} strokeWidth="1" />

        {/* Traffic lights */}
        <circle cx="24" cy="27" r="7" fill="#FF5F57" />
        <circle cx="48" cy="27" r="7" fill="#FEBC2E" />
        <circle cx="72" cy="27" r="7" fill="#28C840" />

        {/* Navigation buttons */}
        <g fill={textColor}>
          <path d="M110 21 L116 27 L110 33" stroke={textColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M140 21 L134 27 L140 33" stroke={textColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Address bar */}
        <rect
          x="180"
          y="12"
          width="840"
          height="30"
          rx="6"
          fill={addressBarColor}
        />
        {/* URL text placeholder */}
        <text
          x="600"
          y="32"
          textAnchor="middle"
          fontSize="13"
          fill={textColor}
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          example.com
        </text>

        {/* Action buttons placeholder */}
        <g fill={textColor}>
          {/* Share button */}
          <rect x="1050" y="17" width="20" height="20" rx="4" fill={addressBarColor} />
          {/* More button */}
          <rect x="1080" y="17" width="20" height="20" rx="4" fill={addressBarColor} />
        </g>

        {/* Content area */}
        <foreignObject x="1" y="54" width="1198" height="745">
          <div
            className="h-full w-full overflow-hidden"
            style={{ borderBottomLeftRadius: "11px", borderBottomRightRadius: "11px" }}
          >
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

// iPad Frame - Tablet with slim bezels
export function IPadFrame({
  children,
  className,
  color = "light",
  shadowIntensity = "medium",
}: DeviceFrameBaseProps) {
  const frameColor = color === "light" ? "#E5E5E7" : "#1D1D1F"
  const bezelColor = color === "light" ? "#FFFFFF" : "#000000"

  return (
    <div className={cn("relative inline-flex", SHADOW_STYLES[shadowIntensity], className)}>
      <svg
        viewBox="0 0 834 1194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        {/* Tablet body */}
        <rect
          x="0"
          y="0"
          width="834"
          height="1194"
          rx="36"
          ry="36"
          fill={frameColor}
        />
        {/* Inner bezel */}
        <rect
          x="6"
          y="6"
          width="822"
          height="1182"
          rx="30"
          ry="30"
          fill={bezelColor}
        />
        {/* Screen area */}
        <rect
          x="20"
          y="36"
          width="794"
          height="1122"
          rx="8"
          fill="#000"
        />
        {/* Camera */}
        <circle cx="417" cy="18" r="6" fill="#2D2D2D" />
        <circle cx="417" cy="18" r="4" fill="#1A1A1A" />

        {/* Volume buttons */}
        <rect x="830" y="120" width="6" height="50" rx="2" fill={frameColor} />
        <rect x="830" y="180" width="6" height="50" rx="2" fill={frameColor} />
        {/* Power button */}
        <rect x="200" y="-2" width="80" height="4" rx="2" fill={frameColor} />

        {/* Content area */}
        <foreignObject x="20" y="36" width="794" height="1122">
          <div
            className="h-full w-full overflow-hidden"
            style={{ borderRadius: "8px" }}
          >
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

// No Frame - Just rounded corners
export function NoFrame({
  children,
  className,
  shadowIntensity = "medium",
}: Omit<DeviceFrameBaseProps, "color">) {
  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden rounded-xl",
        SHADOW_STYLES[shadowIntensity],
        className
      )}
    >
      {children}
    </div>
  )
}

// Device Frame wrapper component
interface DeviceFrameProps extends DeviceFrameBaseProps {
  device: DeviceType
}

export function DeviceFrame({
  device,
  children,
  className,
  color = "light",
  shadowIntensity = "medium",
}: DeviceFrameProps) {
  const frameProps = { children, className, color, shadowIntensity }

  switch (device) {
    case "iphone":
      return <IPhoneFrame {...frameProps} />
    case "macbook":
      return <MacBookFrame {...frameProps} />
    case "browser":
      return <BrowserFrame {...frameProps} />
    case "ipad":
      return <IPadFrame {...frameProps} />
    case "none":
    default:
      return <NoFrame {...frameProps} />
  }
}

export { SHADOW_STYLES }

import { ImageResponse } from "next/og"

import { LOGO_SVG_PATH } from "@/lib/icons/logo"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30%",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="140"
        height="140"
      >
        <path d={LOGO_SVG_PATH} />
      </svg>
    </div>,
    { ...size }
  )
}

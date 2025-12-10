import { ImageResponse } from "next/og"

import { LOGO_SVG_PATH } from "@/lib/icons/logo"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="#0a0a0a"
        >
          <path d={LOGO_SVG_PATH} />
        </svg>
      </div>
    ),
    { ...size }
  )
}

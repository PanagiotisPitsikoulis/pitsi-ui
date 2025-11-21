"use client"

import Theme from "@/registry/new-york-v4/ui/theme"

const customTheme = `
:root {
  --custom-bg: #f0f9ff;
  --custom-text: #0c4a6e;
}

.dark {
  --custom-bg: #0c4a6e;
  --custom-text: #f0f9ff;
}
`

export default function ThemeDemo() {
  return (
    <Theme theme={customTheme}>
      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: "var(--custom-bg)",
          color: "var(--custom-text)",
        }}
      >
        <h3 className="text-lg font-semibold">Custom Theme</h3>
        <p className="mt-2">
          This component uses custom CSS variables that adapt to light/dark
          mode.
        </p>
      </div>
    </Theme>
  )
}

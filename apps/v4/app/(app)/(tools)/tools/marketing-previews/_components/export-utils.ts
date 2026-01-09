import { toPng, toJpeg } from "html-to-image"

import type { AspectRatioKey, ExportSettings } from "./types"
import { ASPECT_RATIOS } from "./types"

export async function exportCanvas(
  element: HTMLElement,
  aspectRatio: AspectRatioKey,
  settings: ExportSettings
): Promise<Blob> {
  const { format, quality, scale } = settings
  const dimensions = ASPECT_RATIOS[aspectRatio]

  const width = dimensions.width * scale
  const height = dimensions.height * scale

  const options = {
    width,
    height,
    pixelRatio: 1, // We handle scale via width/height
    quality: quality / 100,
    backgroundColor: format === "jpg" ? "#ffffff" : undefined,
  }

  try {
    if (format === "png") {
      const dataUrl = await toPng(element, options)
      return dataUrlToBlob(dataUrl)
    } else {
      const dataUrl = await toJpeg(element, options)
      return dataUrlToBlob(dataUrl)
    }
  } catch (error) {
    console.error("Export failed:", error)
    throw new Error("Failed to export image")
  }
}

function dataUrlToBlob(dataUrl: string): Blob {
  const parts = dataUrl.split(",")
  const mime = parts[0].match(/:(.*?);/)?.[1] || "image/png"
  const binary = atob(parts[1])
  const array = new Uint8Array(binary.length)

  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i)
  }

  return new Blob([array], { type: mime })
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function generateFilename(format: "png" | "jpg"): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19)
  return `marketing-preview-${timestamp}.${format}`
}

export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

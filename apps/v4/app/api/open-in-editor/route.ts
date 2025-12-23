import { exec } from "child_process"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  // Only allow in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "Only available in development" },
      { status: 403 }
    )
  }

  try {
    const { filePath, addToWorkspace } = await request.json()

    if (!filePath || typeof filePath !== "string") {
      return NextResponse.json(
        { error: "filePath is required" },
        { status: 400 }
      )
    }

    // Security: Only allow opening files within the project
    const projectRoot = "/Users/panagiotispitsikoulis/Documents/pitsi-ui"
    if (!filePath.startsWith(projectRoot)) {
      return NextResponse.json(
        { error: "File path must be within the project" },
        { status: 403 }
      )
    }

    // Open in Zed editor
    // Use -a flag to add to current workspace (useful for folders)
    const zedCommand = addToWorkspace
      ? `zed -a "${filePath}"`
      : `zed "${filePath}"`

    return new Promise((resolve) => {
      exec(zedCommand, (error, stdout, stderr) => {
        if (error) {
          console.error("Failed to open in Zed:", error)
          resolve(
            NextResponse.json(
              { error: "Failed to open file", details: error.message },
              { status: 500 }
            )
          )
        } else {
          resolve(NextResponse.json({ success: true, filePath }))
        }
      })
    })
  } catch (error) {
    console.error("Error in open-in-editor:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

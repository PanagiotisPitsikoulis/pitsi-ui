export async function register() {
  // This runs once when the server starts
  console.log("[instrumentation] Server starting...")
}

export const onRequestError = async (
  err: { digest: string } & Error,
  request: {
    path: string
    method: string
    headers: { [key: string]: string }
  },
  context: {
    routerKind: "Pages Router" | "App Router"
    routePath: string
    routeType: "render" | "route" | "action" | "middleware"
    renderSource:
      | "react-server-components"
      | "react-server-components-payload"
      | "server-rendering"
    revalidateReason: "on-demand" | "stale" | undefined
    renderType: "dynamic" | "dynamic-resume"
  }
) => {
  // Log detailed error info to server console
  console.warn("=== SERVER REQUEST ERROR ===")
  console.warn("Error:", err.message)
  console.warn("Digest:", err.digest)
  console.warn("Stack:", err.stack)
  console.warn("Path:", request.path)
  console.warn("Method:", request.method)
  console.warn("Route:", context.routePath)
  console.warn("Route Type:", context.routeType)
  console.warn("Render Source:", context.renderSource)
  console.warn("============================")
}

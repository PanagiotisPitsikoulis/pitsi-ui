import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { processMdxForLLMs } from "@/lib/docs/llm"
import * as registryUtils from "@/lib/registry"
import fs from "fs"

// Mock fs module
vi.mock("fs", () => ({
  default: {
    readFileSync: vi.fn(),
  },
}))

// Mock registry
vi.mock("@/lib/registry", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/registry")>()
  return {
    ...actual,
    queryRegistry: vi.fn(),
  }
})

describe("llm", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("processMdxForLLMs", () => {
    it("should process MDX content without ComponentPreview tags unchanged", async () => {
      const content = `# Title

This is regular MDX content without any component previews.

\`\`\`tsx
const example = "code block"
\`\`\`
`

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toBe(content)
      expect(registryUtils.queryRegistry).not.toHaveBeenCalled()
    })

    it("should replace ComponentPreview with actual component source code", async () => {
      const content = `# Button Component

<ComponentPreview name="button-demo" />

Some text after.`

      const mockComponentSource = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "button-demo",
        type: "registry:example",
        files: [
          {
            path: "registry/new-york-v4/example/button-demo.tsx",
            type: "registry:example",
          },
        ],
      })

      vi.mocked(fs.readFileSync).mockReturnValue(
        `import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonDemo() {
  return <Button>Click me</Button>
}`
      )

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toContain("```tsx")
      expect(result).toContain("import { Button } from")
      expect(result).toContain("@/components/ui/button")
      expect(result).not.toContain("@/registry/new-york-v4/")
      expect(result).toContain("export function ButtonDemo")
      expect(result).not.toContain("<ComponentPreview")
    })

    it("should transform registry imports to component imports", async () => {
      const content = `<ComponentPreview name="dialog-demo" />`

      const sourceWithRegistryImports = `import { Dialog } from "@/registry/new-york-v4/ui/dialog"
import { Button } from "@/registry/new-york-v4/ui/button"
import { cn } from "@/registry/new-york-v4/lib/utils"

export default function DialogDemo() {
  return <Dialog />
}`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "dialog-demo",
        type: "registry:example",
        files: [{ path: "test.tsx", type: "registry:example" }],
      })

      vi.mocked(fs.readFileSync).mockReturnValue(sourceWithRegistryImports)

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toContain("@/components/ui/dialog")
      expect(result).toContain("@/components/ui/button")
      expect(result).toContain("@/components/lib/utils")
      expect(result).not.toContain("@/registry/new-york-v4/")
    })

    it("should replace export default with export", async () => {
      const content = `<ComponentPreview name="test-demo" />`

      const sourceWithDefaultExport = `export default function TestDemo() {
  return <div>Test</div>
}`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "test-demo",
        type: "registry:example",
        files: [{ path: "test.tsx", type: "registry:example" }],
      })

      vi.mocked(fs.readFileSync).mockReturnValue(sourceWithDefaultExport)

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toContain("export function TestDemo")
      expect(result).not.toContain("export default")
    })

    it("should handle multiple ComponentPreview tags", async () => {
      const content = `# Components

<ComponentPreview name="button-demo" />

Some text between.

<ComponentPreview name="dialog-demo" />

End text.`

      vi.mocked(registryUtils.queryRegistry)
        .mockResolvedValueOnce({
          name: "button-demo",
          type: "registry:example",
          files: [{ path: "button.tsx", type: "registry:example" }],
        })
        .mockResolvedValueOnce({
          name: "dialog-demo",
          type: "registry:example",
          files: [{ path: "dialog.tsx", type: "registry:example" }],
        })

      vi.mocked(fs.readFileSync)
        .mockReturnValueOnce("export default function ButtonDemo() {}")
        .mockReturnValueOnce("export default function DialogDemo() {}")

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toContain("export function ButtonDemo")
      expect(result).toContain("export function DialogDemo")
      expect(result).not.toContain("<ComponentPreview")
      expect(registryUtils.queryRegistry).toHaveBeenCalledTimes(2)
    })

    it("should handle ComponentPreview with additional attributes", async () => {
      const content = `<ComponentPreview
  name="button-demo"
  className="my-4"
  showCode={false}
/>`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "button-demo",
        type: "registry:example",
        files: [{ path: "test.tsx", type: "registry:example" }],
      })

      vi.mocked(fs.readFileSync).mockReturnValue(
        "export default function Test() {}"
      )

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toContain("```tsx")
      expect(result).not.toContain("<ComponentPreview")
    })

    it("should skip ComponentPreview when component not found", async () => {
      const content = `<ComponentPreview name="non-existent-demo" />`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue(null)

      const result = await processMdxForLLMs(content, "new-york-v4")

      
      expect(result).toBe(content)
    })

    it("should skip ComponentPreview when files array is empty", async () => {
      const content = `<ComponentPreview name="empty-demo" />`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "empty-demo",
        type: "registry:example",
        files: [],
      })

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toBe(content)
    })

    it("should skip ComponentPreview when path is missing", async () => {
      const content = `<ComponentPreview name="no-path-demo" />`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "no-path-demo",
        type: "registry:example",
        files: [{ type: "registry:example" } as any],
      })

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toBe(content)
    })

    it("should handle errors gracefully and skip problematic previews", async () => {
      const content = `<ComponentPreview name="error-demo" />

<ComponentPreview name="good-demo" />`

      vi.mocked(registryUtils.queryRegistry)
        .mockRejectedValueOnce(new Error("Registry error"))
        .mockResolvedValueOnce({
          name: "good-demo",
          type: "registry:example",
          files: [{ path: "test.tsx", type: "registry:example" }],
        })

      vi.mocked(fs.readFileSync).mockReturnValue(
        "export default function Good() {}"
      )

      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

      const result = await processMdxForLLMs(content, "new-york-v4")

      
      
      expect(result).toContain("export function Good")
      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })

    it("should handle complex registry import patterns", async () => {
      const content = `<ComponentPreview name="complex-demo" />`

      const complexSource = `import * as React from "react"
import { Dialog, DialogContent } from "@/registry/new-york-v4/ui/dialog"
import { Button } from "@/registry/new-york-v4/ui/button"
import { useToast } from "@/registry/new-york-v4/hooks/use-toast"
import { cn } from "@/registry/new-york-v4/lib/utils"

export default function ComplexDemo() {
  return <div />
}`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "complex-demo",
        type: "registry:example",
        files: [{ path: "test.tsx", type: "registry:example" }],
      })

      vi.mocked(fs.readFileSync).mockReturnValue(complexSource)

      const result = await processMdxForLLMs(content, "new-york-v4")

      expect(result).toContain("@/components/ui/dialog")
      expect(result).toContain("@/components/ui/button")
      expect(result).toContain("@/components/hooks/use-toast")
      expect(result).toContain("@/components/lib/utils")
      expect(result).not.toContain("@/registry/new-york-v4/")
    })

    it("should preserve code blocks that are not ComponentPreview", async () => {
      const content = `# Documentation

\`\`\`tsx

const example = "should be preserved"
\`\`\`

<ComponentPreview name="test-demo" />

\`\`\`bash
npm install test
\`\`\``

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "test-demo",
        type: "registry:example",
        files: [{ path: "test.tsx", type: "registry:example" }],
      })

      vi.mocked(fs.readFileSync).mockReturnValue(
        "export default function Test() {}"
      )

      const result = await processMdxForLLMs(content, "new-york-v4")

      
      expect(result).toContain('const example = "should be preserved"')
      expect(result).toContain("npm install test")
      
      expect(result).not.toContain("<ComponentPreview")
    })

    it("should pass correct style parameter to queryRegistry", async () => {
      const content = `<ComponentPreview name="test-demo" />`

      vi.mocked(registryUtils.queryRegistry).mockResolvedValue({
        name: "test-demo",
        type: "registry:example",
        files: [{ path: "test.tsx", type: "registry:example" }],
      })

      vi.mocked(fs.readFileSync).mockReturnValue("export default function T() {}")

      await processMdxForLLMs(content, "custom-style" as any)

      expect(registryUtils.queryRegistry).toHaveBeenCalledWith({
        name: "test-demo",
        style: "custom-style",
      })
    })
  })
})

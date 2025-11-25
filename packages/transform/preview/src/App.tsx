import { useState, useEffect } from "react"

const templates = {
  "e-commerce": [
    "e-commerce-1",
    "e-commerce-2",
    "e-commerce-3",
    "e-commerce-4",
    "e-commerce-5",
  ],
  agency: [
    "agency-1",
    "agency-2",
    "agency-3",
    "agency-4",
    "agency-5",
    "agency-6",
    "agency-7",
    "agency-8",
    "agency-9",
  ],
  ai: ["ai-1", "ai-2", "ai-3", "ai-4", "ai-5", "ai-6"],
  saas: [
    "saas-1",
    "saas-2",
    "saas-3",
    "saas-4",
    "saas-5",
    "saas-6",
    "saas-7",
    "saas-8",
  ],
  app: ["app-1", "app-2", "app-3"],
  portfolio: [
    "portfolio-1",
    "portfolio-2",
    "portfolio-3",
    "portfolio-4",
    "portfolio-5",
    "portfolio-6",
    "portfolio-7",
  ],
  simple: ["simple-1", "simple-2", "simple-3", "simple-4", "simple-5"],
  "ui---dev-tool": ["ui---dev-tool-1", "ui---dev-tool-2", "ui---dev-tool-3"],
}

type Category = keyof typeof templates
type Status = "working" | "finished" | "pending"
type Tab = "templates" | "workflow"

interface Template {
  category: string
  name: string
  status: Status
}

interface GeneratedComponent {
  category: string
  site: string
  page: string
  filename: string
  path: string
}

interface WorkflowSite {
  category: string
  site: string
  screenshots: string[]
  videos: string[]
  theme: object | null
  components: GeneratedComponent[]
}

interface WorkflowManifest {
  sites: WorkflowSite[]
}

function useStatusStorage() {
  const [statuses, setStatuses] = useState<Record<string, Status>>({})

  useEffect(() => {
    const saved = localStorage.getItem("template-statuses")
    if (saved) {
      setStatuses(JSON.parse(saved))
    }
  }, [])

  const setStatus = (name: string, status: Status) => {
    setStatuses((prev) => {
      const next = { ...prev }
      if (status === "pending") {
        delete next[name]
      } else {
        next[name] = status
      }
      localStorage.setItem("template-statuses", JSON.stringify(next))
      return next
    })
  }

  const getStatus = (name: string): Status => {
    return statuses[name] || "pending"
  }

  return { getStatus, setStatus }
}

function useWorkflowData() {
  const [data, setData] = useState<WorkflowManifest | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/output/manifest.json")
        if (response.ok) {
          const manifest = await response.json()
          setData(manifest)
        }
      } catch {
        setData(null)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  return { data, loading }
}

function TemplateCard({
  template,
  onStatusChange,
}: {
  template: Template
  onStatusChange: (status: Status) => void
}) {
  return (
    <div className="group relative rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden transition-all hover:shadow-xl hover:shadow-zinc-900/50 hover:border-zinc-600">
      <a
        href={`/templates/${template.category}/${template.name}/${template.name}-home.html`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="aspect-[16/9] bg-zinc-800 overflow-hidden">
          <iframe
            src={`/templates/${template.category}/${template.name}/${template.name}-home.html`}
            className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
            title={template.name}
            loading="lazy"
          />
        </div>
      </a>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg capitalize">
            {template.name.replace(/-/g, " ")}
          </h3>
          <p className="text-sm text-zinc-500 capitalize">
            {template.category.replace(/-/g, " ")}
          </p>
        </div>
        <select
          value={template.status}
          onChange={(e) => onStatusChange(e.target.value as Status)}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-800 border border-zinc-700 rounded-md px-2 py-1 text-sm text-white cursor-pointer hover:bg-zinc-700"
        >
          <option value="pending">Pending</option>
          <option value="working">Working</option>
          <option value="finished">Finished</option>
        </select>
      </div>
    </div>
  )
}

function CodeViewer({
  title,
  path,
  onClose,
  isComponent = false,
}: {
  title: string
  path: string
  onClose: () => void
  isComponent?: boolean
}) {
  const [code, setCode] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const [showPreview, setShowPreview] = useState(isComponent)

  useEffect(() => {
    async function loadCode() {
      try {
        const response = await fetch(path)
        if (response.ok) {
          const text = await response.text()
          setCode(text)
        } else {
          setCode("// Failed to load code")
        }
      } catch {
        setCode("// Failed to load code")
      }
      setLoading(false)
    }
    loadCode()
  }, [path])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 w-full max-w-5xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h2 className="font-semibold text-lg">{title}</h2>
          <div className="flex gap-2">
            {isComponent && (
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                {showPreview ? "Show Code" : "Show Preview"}
              </button>
            )}
            <button
              onClick={copyToClipboard}
              className="px-3 py-1.5 rounded-md text-sm font-medium bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-md text-sm font-medium bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          ) : showPreview && isComponent ? (
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <meta charset="utf-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src="https://cdn.tailwindcss.com"></script>
                      <style>
                        body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
                      </style>
                    </head>
                    <body>
                      <div id="root"></div>
                      <div class="p-8 text-center text-gray-500">
                        <p class="mb-4">⚠️ Component preview is limited</p>
                        <p class="text-sm">Generated React components require proper React setup to render.</p>
                        <p class="text-sm mt-2">Switch to "Show Code" to view the component source.</p>
                      </div>
                      <script>
                        // This is a placeholder - actual React rendering would require a full build setup
                        console.log('Component code loaded');
                      </script>
                    </body>
                  </html>
                `}
                className="w-full h-full min-h-[400px] border-0"
                title="Component Preview"
              />
            </div>
          ) : (
            <pre className="text-sm font-mono text-zinc-300 whitespace-pre-wrap">
              <code>{code}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}

function ImageModal({
  src,
  title,
  onClose,
}: {
  src: string
  title: string
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[95vw] max-h-[95vh]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 px-3 py-1.5 rounded-md text-sm font-medium bg-zinc-800 hover:bg-zinc-700 transition-colors"
        >
          Close
        </button>
        <img
          src={src}
          alt={title}
          className="max-w-full max-h-[90vh] rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
        <p className="text-center text-zinc-400 mt-2">{title}</p>
      </div>
    </div>
  )
}

function VideoModal({
  src,
  title,
  onClose,
}: {
  src: string
  title: string
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[95vw] max-h-[95vh]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 px-3 py-1.5 rounded-md text-sm font-medium bg-zinc-800 hover:bg-zinc-700 transition-colors"
        >
          Close
        </button>
        <video
          src={src}
          controls
          autoPlay
          className="max-w-full max-h-[85vh] rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
        <p className="text-center text-zinc-400 mt-2">{title}</p>
      </div>
    </div>
  )
}

function ThemePreview({ theme }: { theme: object }) {
  const colors = (theme as any)?.colors || {}
  const typography = (theme as any)?.typography || {}

  const formatValue = (value: any): string => {
    if (value === null || value === undefined) return 'N/A'
    if (typeof value === 'object') {
      if (Array.isArray(value)) return value.join(', ')
      return JSON.stringify(value, null, 2)
    }
    return String(value)
  }

  return (
    <div className="space-y-4">
      {Object.keys(colors).length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-zinc-400 mb-2">Colors</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(colors).slice(0, 12).map(([name, value]) => (
              <div key={name} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded border border-zinc-700"
                  style={{ backgroundColor: value as string }}
                  title={formatValue(value)}
                />
                <span className="text-xs text-zinc-500">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {Object.keys(typography).length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-zinc-400 mb-2">Typography</h4>
          <div className="text-xs text-zinc-300 space-y-2 font-mono">
            {Object.entries(typography).slice(0, 6).map(([name, value]) => (
              <div key={name} className="flex gap-2">
                <span className="text-zinc-500 min-w-[80px]">{name}:</span>
                <span className="text-zinc-300 flex-1">{formatValue(value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function SiteCard({
  site,
  onViewScreenshot,
  onViewVideo,
  onViewComponent,
  onViewTheme,
}: {
  site: WorkflowSite
  onViewScreenshot: (path: string, name: string) => void
  onViewVideo: (path: string, name: string) => void
  onViewComponent: (path: string, name: string) => void
  onViewTheme: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
      <div
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-zinc-800/50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h3 className="font-semibold text-lg capitalize">
            {site.site.replace(/-/g, " ")}
          </h3>
          <p className="text-sm text-zinc-500 capitalize">
            {site.category.replace(/-/g, " ")}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-xs text-zinc-500">
            {site.screenshots.length > 0 && (
              <span className="bg-zinc-800 px-2 py-1 rounded">
                {site.screenshots.length} screenshots
              </span>
            )}
            {site.videos.length > 0 && (
              <span className="bg-zinc-800 px-2 py-1 rounded">
                {site.videos.length} videos
              </span>
            )}
            {site.components.length > 0 && (
              <span className="bg-zinc-800 px-2 py-1 rounded">
                {site.components.length} components
              </span>
            )}
            {site.theme && (
              <span className="bg-zinc-800 px-2 py-1 rounded">theme</span>
            )}
          </div>
          <span className="text-zinc-500">{expanded ? "▼" : "▶"}</span>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-zinc-800 p-4 space-y-6">
          {/* Screenshots */}
          {site.screenshots.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-2">
                <span>📸</span> Screenshots
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {site.screenshots.map((screenshot) => {
                  const name = screenshot.split("/").pop() || screenshot
                  return (
                    <div
                      key={screenshot}
                      className="cursor-pointer group"
                      onClick={() => onViewScreenshot(`/output/screenshots/${site.category}/${site.site}/${name}`, name)}
                    >
                      <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 group-hover:border-zinc-500 transition-colors">
                        <img
                          src={`/output/screenshots/${site.category}/${site.site}/${name}`}
                          alt={name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs text-zinc-500 mt-1 truncate">{name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Videos */}
          {site.videos.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-2">
                <span>🎬</span> Videos
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {site.videos.map((video) => {
                  const name = video.split("/").pop() || video
                  return (
                    <div
                      key={video}
                      className="cursor-pointer group"
                      onClick={() => onViewVideo(`/output/videos/${site.category}/${site.site}/${name}`, name)}
                    >
                      <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 group-hover:border-zinc-500 transition-colors flex items-center justify-center">
                        <span className="text-4xl">▶️</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1 truncate">{name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Theme */}
          {site.theme && (
            <div>
              <h4 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-2">
                <span>🎨</span> Theme
                <button
                  onClick={onViewTheme}
                  className="ml-auto text-xs bg-zinc-800 px-2 py-1 rounded hover:bg-zinc-700 transition-colors"
                >
                  View JSON
                </button>
              </h4>
              <ThemePreview theme={site.theme} />
            </div>
          )}

          {/* Components */}
          {site.components.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-2">
                <span>⚛️</span> React Components
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {site.components.map((component) => (
                  <div
                    key={component.path}
                    className="cursor-pointer p-3 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors group"
                    onClick={() => onViewComponent(`/output/components/${component.path}`, component.filename)}
                  >
                    <div className="flex items-center justify-between">
                      <code className="text-xs text-zinc-300">{component.filename}</code>
                      <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">⚛️</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1 capitalize">
                      {component.page.replace(/-/g, " ")} page
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function WorkflowTab() {
  const { data, loading } = useWorkflowData()
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null)
  const [selectedCode, setSelectedCode] = useState<{ path: string; title: string; isComponent?: boolean } | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading workflow results...</p>
        </div>
      </div>
    )
  }

  if (!data || data.sites.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">🔄</div>
          <h3 className="text-xl font-semibold mb-2">No Workflow Results Yet</h3>
          <p className="text-zinc-400 mb-4">
            Run the transform workflow to capture screenshots, videos, extract themes, and generate React components.
          </p>
          <code className="bg-zinc-800 px-3 py-2 rounded-md text-sm block">
            pnpm transform:workflow
          </code>
        </div>
      </div>
    )
  }

  const categories = ["all", ...new Set(data.sites.map((s) => s.category))]
  const filteredSites = selectedCategory === "all"
    ? data.sites
    : data.sites.filter((s) => s.category === selectedCategory)

  const stats = {
    sites: data.sites.length,
    screenshots: data.sites.reduce((acc, s) => acc + s.screenshots.length, 0),
    videos: data.sites.reduce((acc, s) => acc + s.videos.length, 0),
    components: data.sites.reduce((acc, s) => acc + s.components.length, 0),
    themes: data.sites.filter((s) => s.theme).length,
  }

  return (
    <>
      <div className="px-6 py-2 text-zinc-400 text-sm">
        {stats.sites} sites &middot; {stats.screenshots} screenshots &middot; {stats.videos} videos &middot; {stats.components} components &middot; {stats.themes} themes
      </div>

      <div className="px-6 py-4">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-zinc-500 self-center mr-2">Category:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {category.replace(/-/g, " ")}
            </button>
          ))}
        </div>
      </div>

      <main className="p-6 space-y-4">
        {filteredSites.map((site) => (
          <SiteCard
            key={`${site.category}/${site.site}`}
            site={site}
            onViewScreenshot={(src, title) => setSelectedImage({ src, title })}
            onViewVideo={(src, title) => setSelectedVideo({ src, title })}
            onViewComponent={(path, title) => setSelectedCode({ path, title, isComponent: true })}
            onViewTheme={() => setSelectedCode({
              path: `/output/themes/${site.category}/${site.site}/theme.json`,
              title: `${site.site} Theme`,
              isComponent: false
            })}
          />
        ))}
      </main>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {selectedVideo && (
        <VideoModal
          src={selectedVideo.src}
          title={selectedVideo.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {selectedCode && (
        <CodeViewer
          path={selectedCode.path}
          title={selectedCode.title}
          isComponent={selectedCode.isComponent}
          onClose={() => setSelectedCode(null)}
        />
      )}
    </>
  )
}

function TemplatesTab() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all")
  const [selectedStatus, setSelectedStatus] = useState<Status | "all">("all")
  const { getStatus, setStatus } = useStatusStorage()

  const allTemplates = Object.entries(templates).flatMap(([category, items]) =>
    items.map((item) => ({ category, name: item, status: getStatus(item) }))
  )

  const filteredTemplates = allTemplates
    .filter((t) => selectedCategory === "all" || t.category === selectedCategory)
    .filter((t) => selectedStatus === "all" || t.status === selectedStatus)

  const counts = {
    working: allTemplates.filter((t) => t.status === "working").length,
    finished: allTemplates.filter((t) => t.status === "finished").length,
    pending: allTemplates.filter((t) => t.status === "pending").length,
  }

  return (
    <>
      <div className="px-6 py-2 text-zinc-400 text-sm">
        {allTemplates.length} templates &middot; {counts.working} working &middot; {counts.finished} finished &middot; {counts.pending} pending
      </div>

      <div className="px-6 py-4 space-y-3">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-zinc-500 self-center mr-2">Status:</span>
          {(["all", "working", "finished", "pending"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                selectedStatus === status
                  ? "bg-white text-black"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-zinc-500 self-center mr-2">Category:</span>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-white text-black"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            All
          </button>
          {Object.keys(templates).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Category)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {category.replace(/-/g, " ")}
            </button>
          ))}
        </div>
      </div>

      <main className="p-6 space-y-8">
        {filteredTemplates.filter((t) => t.status === "working").length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Working On</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTemplates
                .filter((t) => t.status === "working")
                .map((template) => (
                  <TemplateCard
                    key={template.name}
                    template={template}
                    onStatusChange={(status) => setStatus(template.name, status)}
                  />
                ))}
            </div>
          </section>
        )}

        {filteredTemplates.filter((t) => t.status === "finished").length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Finished</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTemplates
                .filter((t) => t.status === "finished")
                .map((template) => (
                  <TemplateCard
                    key={template.name}
                    template={template}
                    onStatusChange={(status) => setStatus(template.name, status)}
                  />
                ))}
            </div>
          </section>
        )}

        {filteredTemplates.filter((t) => t.status === "pending").length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Pending</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTemplates
                .filter((t) => t.status === "pending")
                .map((template) => (
                  <TemplateCard
                    key={template.name}
                    template={template}
                    onStatusChange={(status) => setStatus(template.name, status)}
                  />
                ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("workflow")

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-2xl font-bold">Transform Preview</h1>
        <div className="flex gap-1 mt-4">
          <button
            onClick={() => setActiveTab("workflow")}
            className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
              activeTab === "workflow"
                ? "bg-zinc-800 text-white border-b-2 border-white"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
            }`}
          >
            🔄 Workflow Results
          </button>
          <button
            onClick={() => setActiveTab("templates")}
            className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
              activeTab === "templates"
                ? "bg-zinc-800 text-white border-b-2 border-white"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
            }`}
          >
            📄 HTML Templates
          </button>
        </div>
      </header>

      {activeTab === "workflow" ? <WorkflowTab /> : <TemplatesTab />}
    </div>
  )
}

import { useState } from "react"

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

// ============================================
// EDIT THESE TO TRACK YOUR PROGRESS
// ============================================
const workingOn: string[] = [
  "e-commerce-3",
  "e-commerce-4",
  "saas-2",
  "agency-5",
]

const finished: string[] = []
// ============================================

type Category = keyof typeof templates
type Status = "working" | "finished" | "pending"

function getStatus(name: string): Status {
  if (workingOn.includes(name)) return "working"
  if (finished.includes(name)) return "finished"
  return "pending"
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all"
  )
  const [selectedStatus, setSelectedStatus] = useState<Status | "all">("all")

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
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-2xl font-bold">Template Preview</h1>
        <p className="text-zinc-400 text-sm mt-1">
          {allTemplates.length} templates &middot;{" "}
          <span className="text-yellow-500">{counts.working} working</span> &middot;{" "}
          <span className="text-green-500">{counts.finished} finished</span> &middot;{" "}
          <span className="text-zinc-500">{counts.pending} pending</span>
        </p>
      </header>

      <div className="px-6 py-4 space-y-3">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-zinc-500 self-center mr-2">Status:</span>
          {(["all", "working", "finished", "pending"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                selectedStatus === status
                  ? status === "working"
                    ? "bg-yellow-500 text-black"
                    : status === "finished"
                      ? "bg-green-500 text-black"
                      : "bg-white text-black"
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

      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTemplates.map((template) => (
            <a
              key={template.name}
              href={`/templates/${template.category}/${template.name}/${template.name}-home.html`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl border bg-zinc-900 overflow-hidden transition-all hover:shadow-xl hover:shadow-zinc-900/50 ${
                template.status === "working"
                  ? "border-yellow-500/50 hover:border-yellow-500"
                  : template.status === "finished"
                    ? "border-green-500/50 hover:border-green-500"
                    : "border-zinc-800 hover:border-zinc-600"
              }`}
            >
              {template.status !== "pending" && (
                <div
                  className={`absolute top-3 right-3 z-10 px-2 py-1 rounded text-xs font-medium ${
                    template.status === "working"
                      ? "bg-yellow-500 text-black"
                      : "bg-green-500 text-black"
                  }`}
                >
                  {template.status === "working" ? "Working" : "Done"}
                </div>
              )}
              <div className="aspect-[16/9] bg-zinc-800 overflow-hidden">
                <iframe
                  src={`/templates/${template.category}/${template.name}/${template.name}-home.html`}
                  className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                  title={template.name}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg capitalize">
                  {template.name.replace(/-/g, " ")}
                </h3>
                <p className="text-sm text-zinc-500 capitalize">
                  {template.category.replace(/-/g, " ")}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

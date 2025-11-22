import { useState } from "react"

const templates = {
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
  ai: ["ai-1", "ai-2", "ai-3"],
  app: ["app-1", "app-2", "app-3"],
  "e-commerce": [
    "e-commerce-1",
    "e-commerce-2",
    "e-commerce-3",
    "e-commerce-4",
    "e-commerce-5",
  ],
  portfolio: [
    "portfolio-1",
    "portfolio-2",
    "portfolio-3",
    "portfolio-4",
    "portfolio-5",
    "portfolio-6",
  ],
  saas: ["saas-1", "saas-2", "saas-3", "saas-4", "saas-5", "saas-6", "saas-7"],
  "ui---dev-tool": ["ui---dev-tool-1", "ui---dev-tool-2"],
}

type Category = keyof typeof templates

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all"
  )

  const allTemplates = Object.entries(templates).flatMap(([category, items]) =>
    items.map((item) => ({ category, name: item }))
  )

  const filteredTemplates =
    selectedCategory === "all"
      ? allTemplates
      : allTemplates.filter((t) => t.category === selectedCategory)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-2xl font-bold">Template Preview</h1>
        <p className="text-zinc-400 text-sm mt-1">
          {allTemplates.length} templates available
        </p>
      </header>

      <div className="flex gap-2 px-6 py-4 flex-wrap">
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

      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTemplates.map((template) => (
            <a
              key={template.name}
              href={`/templates/${template.category}/${template.name}/${template.name}-home.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-zinc-600 transition-all hover:shadow-xl hover:shadow-zinc-900/50"
            >
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

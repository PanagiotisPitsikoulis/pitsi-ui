import { ButtonNeobrutalist } from "@/registry/new-york-v4/ui/button-neobrutalist"

export default function ButtonNeobrutalistDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <ButtonNeobrutalist>Default</ButtonNeobrutalist>
      <ButtonNeobrutalist variant="secondary">Secondary</ButtonNeobrutalist>
      <ButtonNeobrutalist variant="outline">Outline</ButtonNeobrutalist>
    </div>
  )
}

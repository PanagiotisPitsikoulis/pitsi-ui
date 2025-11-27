import { notFound } from "next/navigation"

// Import all template components from agency-2 family
import Agency2AboutPage from "../../../../(app)/templates/_components/agency-2/AboutPage"
import Agency2BlogHowBiofertilizerCanRestoreSoilHealthNaturallyPage from "../../../../(app)/templates/_components/agency-2/BlogHowBiofertilizerCanRestoreSoilHealthNaturallyPage"
import Agency2BlogPage from "../../../../(app)/templates/_components/agency-2/BlogPage"
import Agency2BlogTheScienceBehindBiogasPage from "../../../../(app)/templates/_components/agency-2/BlogTheScienceBehindBiogasPage"
import Agency2ContactPage from "../../../../(app)/templates/_components/agency-2/ContactPage"
import Agency2HomePage from "../../../../(app)/templates/_components/agency-2/HomePage"
import Agency2PrivacyPolicyPage from "../../../../(app)/templates/_components/agency-2/PrivacyPolicyPage"
import Agency2ProjectsGreenPasturesDairyBiogasPlantPage from "../../../../(app)/templates/_components/agency-2/ProjectsGreenPasturesDairyBiogasPlantPage"
import Agency2ProjectsNyeriCoDigestionPilotPage from "../../../../(app)/templates/_components/agency-2/ProjectsNyeriCoDigestionPilotPage"
import Agency2ProjectsPage from "../../../../(app)/templates/_components/agency-2/ProjectsPage"
import Agency2ProjectsSavannahAgroProcessingBiogasRetrofitPage from "../../../../(app)/templates/_components/agency-2/ProjectsSavannahAgroProcessingBiogasRetrofitPage"
import Agency2ServicesPage from "../../../../(app)/templates/_components/agency-2/ServicesPage"
import Agency2TermsAndConditionsPage from "../../../../(app)/templates/_components/agency-2/TermsAndConditionsPage"

// Import all template components from simple-3 family
import Simple3AboutPage from "../../../../(app)/templates/_components/simple-3/AboutPage"
import Simple3ContactPage from "../../../../(app)/templates/_components/simple-3/ContactPage"
import Simple3HomePage from "../../../../(app)/templates/_components/simple-3/HomePage"


export const templates = {
  "agency-2-about": Agency2AboutPage,
  "agency-2-blog-post-biofertilizer-can-restore-soil-health-naturally": Agency2BlogHowBiofertilizerCanRestoreSoilHealthNaturallyPage,
  "agency-2-blog": Agency2BlogPage,
  "agency-2-blog-post-science-behind-biogas": Agency2BlogTheScienceBehindBiogasPage,
  "agency-2-contact": Agency2ContactPage,
  "agency-2-home": Agency2HomePage,
  "agency-2-privacy-policy": Agency2PrivacyPolicyPage,
  "agency-2-project-green-pastures-dairy-biogas-plant": Agency2ProjectsGreenPasturesDairyBiogasPlantPage,
  "agency-2-project-nyeri-co-digestion-pilot": Agency2ProjectsNyeriCoDigestionPilotPage,
  "agency-2-projects": Agency2ProjectsPage,
  "agency-2-project-savannah-agro-processing-biogas-retrofit": Agency2ProjectsSavannahAgroProcessingBiogasRetrofitPage,
  "agency-2-services": Agency2ServicesPage,
  "agency-2-terms-and-conditions": Agency2TermsAndConditionsPage,
  "simple-3-about": Simple3AboutPage,
  "simple-3-contact": Simple3ContactPage,
  "simple-3-home": Simple3HomePage,
}

export async function generateStaticParams() {
  return Object.keys(templates).map((slug) => ({
    slug,
  }))
}

export default async function TemplatePreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const TemplateComponent = templates[slug as keyof typeof templates]

  if (!TemplateComponent) {
    notFound()
  }

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <TemplateComponent />
    </div>
  )
}

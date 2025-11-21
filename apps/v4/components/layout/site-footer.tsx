import { siteConfig } from "@/lib/config"
import { SiteFooterClient } from "@/components/layout/site-footer-client"

export function SiteFooter() {
  return (
    <SiteFooterClient
      githubUrl={siteConfig.links.github}
      twitterUrl={siteConfig.links.twitter}
      siteName={siteConfig.name}
    />
  )
}

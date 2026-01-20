export const siteConfig = {
  name: "pitsi/ui",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://pitsiui.com",
  ogImage: "https://pitsiui.com/og.jpg",
  description:
    "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.",
  links: {
    twitter: "https://x.com/panos_dev_",
    github: "https://github.com/PanagiotisPitsikoulis/pitsi-ui",
  },
  navItems: [
    {
      href: "/docs/installation",
      label: "Docs",
    },
    {
      href: "/docs/components",
      label: "Components",
    },
    {
      href: "/docs/animations",
      label: "Animations",
    },
    {
      href: "/docs/react-native",
      label: "React Native",
    },
    {
      href: "/blocks",
      label: "Blocks",
    },
    {
      href: "/tools",
      label: "Tools",
    },
  ],
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

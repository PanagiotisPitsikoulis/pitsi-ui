"use client"

import Image from "next/image"
import {
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Share2,
  Twitter,
} from "lucide-react"

import {
  blogPostDefaults,
  type BlogPostBlockProps,
} from "@/lib/blocks/blog-post.types"
import { cn } from "@/lib/utils"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

// Block-specific defaults for boat/yacht template
const blockDefaults = {
  title: "Navigating the Mediterranean: A Captain's Guide",
  subtitle:
    "Essential knowledge for sailing the azure waters of Europe's most coveted cruising grounds.",
  featuredImage: {
    src: "/placeholders/blocks/service-boat/assets/item-1.webp",
    alt: "Luxury yacht in Mediterranean waters",
  },
  author: {
    name: "Captain James Sterling",
    role: "Master Mariner",
    bio: "Captain Sterling brings 25 years of experience commanding luxury yachts across the world's most prestigious waters, from the Caribbean to the Mediterranean.",
    avatar: {
      src: "/placeholders/avatars/3.webp",
      alt: "Captain James Sterling",
    },
  },
  date: "December 15, 2024",
  readTime: "15 min read",
  category: "Navigation",
  tags: ["Mediterranean", "Sailing", "Navigation", "Seamanship"],
  showShareButtons: true,
  tableOfContents: [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "weather", title: "Weather Patterns", level: 2 },
    { id: "navigation", title: "Navigation Essentials", level: 2 },
    { id: "anchorages", title: "Premier Anchorages", level: 2 },
    { id: "safety", title: "Safety Protocols", level: 2 },
    { id: "conclusion", title: "Setting Sail", level: 1 },
  ],
  content: `
    <p class="lead">The Mediterranean Sea has captivated sailors for millennia, and today it remains the premier destination for yachting enthusiasts seeking a perfect blend of stunning coastlines, rich history, and world-class marinas.</p>

    <h2 id="weather">Weather Patterns</h2>
    <p>Understanding Mediterranean weather is crucial for safe and enjoyable passages. The summer months bring the Meltemi winds in the Aegean, providing excellent sailing conditions but requiring respect for their strength. The Mistral in the Gulf of Lion can develop rapidly, making weather monitoring essential.</p>
    <p>Spring and autumn offer more moderate conditions, with September being particularly favorable for extended cruises. Always consult local weather services and carry a reliable satellite communication system for offshore passages.</p>

    <h2 id="navigation">Navigation Essentials</h2>
    <p>Modern navigation systems have transformed Mediterranean sailing, but traditional seamanship remains invaluable. Chart plotters and AIS systems are essential, yet understanding paper charts and celestial navigation provides crucial backup capabilities.</p>
    <p>The Mediterranean presents unique navigational challenges, from the heavy traffic in the Strait of Messina to the intricate approaches of Croatian islands. Local knowledge, often best gained through experienced pilot guides, proves invaluable.</p>

    <h2 id="anchorages">Premier Anchorages</h2>
    <p>The Mediterranean offers anchorages of extraordinary beauty and variety:</p>
    <ul>
      <li><strong>Cala di Volpe, Sardinia:</strong> The jewel of the Costa Smeralda with turquoise waters</li>
      <li><strong>Hvar, Croatia:</strong> Historic charm meets modern luxury in the Dalmatian Islands</li>
      <li><strong>Positano, Amalfi Coast:</strong> Dramatic cliffs and Italian elegance</li>
      <li><strong>Antibes, French Riviera:</strong> Historic port town with world-class facilities</li>
    </ul>

    <h2 id="safety">Safety Protocols</h2>
    <p>A well-prepared vessel is the foundation of safe passage-making. Regular equipment checks, comprehensive safety briefings for all crew, and up-to-date emergency procedures are non-negotiable. The Mediterranean's busy waters demand constant vigilance and adherence to COLREGS.</p>
    <p>Emergency position-indicating radio beacons (EPIRBs), life rafts, and comprehensive first aid capabilities should be standard equipment. Consider advanced medical training for extended passages.</p>

    <h2 id="conclusion">Setting Sail</h2>
    <p>The Mediterranean awaits with its timeless allure—azure waters, ancient ports, and the promise of adventure. With proper preparation and respect for the sea, every voyage becomes an unforgettable chapter in your maritime journey.</p>
  `,
  relatedPosts: [
    {
      title: "Essential Yacht Maintenance Checklist",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-boat/assets/item-2.webp",
        alt: "Yacht maintenance",
      },
      date: "Dec 10, 2024",
    },
    {
      title: "The Best Marinas in the French Riviera",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-boat/assets/item-3.webp",
        alt: "French Riviera marina",
      },
      date: "Dec 5, 2024",
    },
    {
      title: "Understanding Maritime Weather Systems",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-boat/assets/item-4.webp",
        alt: "Maritime weather",
      },
      date: "Dec 1, 2024",
    },
  ],
  cta: {
    label: "Explore Our Charter Fleet",
    href: "#",
    variant: "default",
  },
}

export function BlogPost3({
  content = {},
  classNames = {},
}: BlogPostBlockProps) {
  const {
    title = blockDefaults.title ?? blogPostDefaults.title,
    subtitle = blockDefaults.subtitle ?? blogPostDefaults.subtitle,
    featuredImage = blockDefaults.featuredImage ??
      blogPostDefaults.featuredImage,
    author = blockDefaults.author ?? blogPostDefaults.author,
    date = blockDefaults.date ?? blogPostDefaults.date,
    readTime = blockDefaults.readTime ?? blogPostDefaults.readTime,
    category = blockDefaults.category ?? blogPostDefaults.category,
    tags = blockDefaults.tags ?? blogPostDefaults.tags,
    showShareButtons = blockDefaults.showShareButtons ??
      blogPostDefaults.showShareButtons,
    tableOfContents = blockDefaults.tableOfContents ??
      blogPostDefaults.tableOfContents,
    content: postContent = blockDefaults.content ?? blogPostDefaults.content,
    relatedPosts = blockDefaults.relatedPosts ?? blogPostDefaults.relatedPosts,
    cta = blockDefaults.cta ?? blogPostDefaults.cta,
  } = content

  return (
    <article className={cn("relative overflow-hidden", classNames.root)}>
      {/* Decorative wave pattern */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23currentColor' d='M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <header
          className={cn(
            "mx-auto mb-12 max-w-3xl text-center",
            classNames.header?.root
          )}
        >
          <HeroText
            badge={category}
            title={title}
            description={subtitle}
            align="center"
            badgeColor="primary"
            classNames={{
              badge: classNames.header?.badge,
              title: cn("text-3xl md:text-5xl", classNames.header?.title),
              description: cn("mb-6", classNames.header?.description),
            }}
          />

          {/* Meta */}
          <div
            className={cn(
              "text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-4 text-sm",
              classNames.header?.meta
            )}
          >
            {author && (
              <div className="flex items-center gap-2">
                {author.avatar && (
                  <Avatar className="h-8 w-8 border-2">
                    <AvatarImage
                      src={author.avatar.src}
                      alt={author.avatar.alt}
                    />
                    <AvatarFallback>
                      {author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
                <span className="font-medium">{author.name}</span>
              </div>
            )}
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
            )}
            {readTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {featuredImage && (
          <div
            className={cn(
              "relative mx-auto mb-12 aspect-[21/9] max-w-5xl overflow-hidden rounded-lg border-2",
              classNames.header?.featuredImage
            )}
          >
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt || ""}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_280px]">
          {/* Main Content */}
          <div className="min-w-0">
            {/* Share Buttons */}
            {showShareButtons && (
              <div
                className={cn("mb-8 flex items-center gap-2", classNames.share)}
              >
                <span className="text-muted-foreground mr-2 text-sm tracking-wider uppercase">
                  Share:
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Copy link">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Post Content */}
            {postContent && (
              <div
                className={cn(
                  "prose prose-lg dark:prose-invert max-w-none",
                  "[&_h2]:font-display [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold",
                  "[&_p]:text-muted-foreground [&_p]:mb-4 [&_p]:leading-relaxed",
                  "[&_.lead]:text-foreground [&_.lead]:text-xl [&_.lead]:leading-relaxed",
                  "[&_ul]:text-muted-foreground [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6",
                  "[&_li]:mb-2",
                  "[&_strong]:text-foreground",
                  classNames.content
                )}
                dangerouslySetInnerHTML={{ __html: postContent }}
              />
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div
                className={cn(
                  "mt-12 flex flex-wrap gap-2 border-t-2 pt-8",
                  classNames.tags
                )}
              >
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-primary/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Author Bio */}
            {author && author.bio && (
              <div
                className={cn(
                  "bg-muted/50 mt-12 rounded-lg border-2 p-6",
                  classNames.author?.root
                )}
              >
                <div className="flex items-start gap-4">
                  {author.avatar && (
                    <Avatar
                      className={cn(
                        "h-16 w-16 border-2",
                        classNames.author?.avatar
                      )}
                    >
                      <AvatarImage
                        src={author.avatar.src}
                        alt={author.avatar.alt}
                      />
                      <AvatarFallback>
                        {author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p
                      className={cn(
                        "font-display text-foreground text-lg font-semibold",
                        classNames.author?.name
                      )}
                    >
                      {author.name}
                    </p>
                    {author.role && (
                      <p className="text-primary mb-2 text-sm font-medium tracking-wider uppercase">
                        {author.role}
                      </p>
                    )}
                    <p
                      className={cn(
                        "text-muted-foreground text-sm",
                        classNames.author?.bio
                      )}
                    >
                      {author.bio}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            {cta && (
              <div
                className={cn(
                  "bg-primary/10 border-primary/20 mt-12 rounded-lg border-2 p-8 text-center",
                  classNames.cta
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-2xl font-bold">
                  Ready to Set Sail?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Discover our collection of luxury yachts and charter services.
                </p>
                <Button asChild>
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className={cn("hidden lg:block", classNames.sidebar)}>
            {/* Table of Contents */}
            {tableOfContents && tableOfContents.length > 0 && (
              <div
                className={cn(
                  "bg-muted/50 sticky top-8 rounded-lg border-2 p-6",
                  classNames.tableOfContents
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-lg font-semibold">
                  Contents
                </h3>
                <nav>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={cn(
                            "text-muted-foreground hover:text-foreground block text-sm transition-colors",
                            item.level === 2 && "pl-4"
                          )}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className={cn("mt-20", classNames.related?.root)}>
            <h2 className="font-display text-foreground mb-8 text-center text-2xl font-bold">
              Related Articles
            </h2>
            <div
              className={cn(
                "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                classNames.related?.grid
              )}
            >
              {relatedPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.href}
                  className={cn(
                    "group bg-card hover:bg-muted/50 hover:border-primary/20 overflow-hidden rounded-lg border-2 transition-all hover:shadow-lg",
                    classNames.related?.post
                  )}
                >
                  {post.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt || ""}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-display text-foreground group-hover:text-primary mb-2 font-semibold transition-colors">
                      {post.title}
                    </h3>
                    {post.date && (
                      <p className="text-muted-foreground text-xs">
                        {post.date}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}

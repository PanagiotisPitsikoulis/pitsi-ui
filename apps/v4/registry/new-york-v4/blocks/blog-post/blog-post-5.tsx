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

// Block-specific defaults for library template
const blockDefaults = {
  title: "The Evolution of Digital Archives",
  subtitle:
    "How modern technology is transforming the preservation and accessibility of historical documents.",
  featuredImage: {
    src: "/placeholders/blocks/service-library/assets/item-1.webp",
    alt: "Library archive room",
  },
  author: {
    name: "Dr. Eleanor Hughes",
    role: "Head of Digital Collections",
    bio: "Dr. Hughes has spent two decades leading digital preservation initiatives at major research libraries, pioneering methods for making rare materials accessible worldwide.",
    avatar: {
      src: "/placeholders/avatars/5.webp",
      alt: "Dr. Eleanor Hughes",
    },
  },
  date: "December 15, 2024",
  readTime: "14 min read",
  category: "Digital Preservation",
  tags: ["Archives", "Digitization", "Preservation", "Technology"],
  showShareButtons: true,
  tableOfContents: [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "challenges", title: "Preservation Challenges", level: 2 },
    { id: "technologies", title: "Emerging Technologies", level: 2 },
    { id: "accessibility", title: "Improving Accessibility", level: 2 },
    { id: "future", title: "The Future of Archives", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],
  content: `
    <p class="lead">The digital revolution has fundamentally changed how we preserve, organize, and provide access to historical documents. What once required physical presence in specialized reading rooms can now be accessed by scholars and enthusiasts worldwide.</p>

    <h2 id="challenges">Preservation Challenges</h2>
    <p>Traditional archival materials—paper, parchment, photographs—face constant threats from environmental factors, handling, and time itself. Digital preservation offers a way to capture and protect these materials, but introduces its own set of challenges around format obsolescence and long-term storage.</p>
    <p>The archival community has developed robust standards and best practices, including the OAIS (Open Archival Information System) reference model, to address these concerns and ensure digital materials remain accessible for future generations.</p>

    <h2 id="technologies">Emerging Technologies</h2>
    <p>Recent technological advances are expanding what's possible in digital preservation:</p>
    <ul>
      <li><strong>High-Resolution Imaging:</strong> Multispectral and RTI imaging reveal details invisible to the naked eye</li>
      <li><strong>OCR Advances:</strong> Machine learning improves text recognition for historical documents</li>
      <li><strong>3D Scanning:</strong> Creates detailed models of artifacts and bound materials</li>
      <li><strong>Distributed Storage:</strong> Geographically dispersed copies protect against localized disasters</li>
    </ul>

    <h2 id="accessibility">Improving Accessibility</h2>
    <p>Digitization fundamentally democratizes access to rare and unique materials. A student in rural Montana can now examine the same medieval manuscript that was once available only to scholars visiting major research libraries. This transformation has opened new avenues for research and education.</p>
    <p>Modern digital platforms incorporate features like adjustable contrast, screen reader compatibility, and multilingual metadata to serve diverse user needs. APIs enable researchers to perform computational analysis across vast collections.</p>

    <h2 id="future">The Future of Archives</h2>
    <p>Looking ahead, artificial intelligence promises to accelerate cataloging, transcription, and discovery. Blockchain technology may provide new methods for authenticating and tracking digital objects. Virtual and augmented reality could offer immersive ways to engage with historical materials.</p>
    <p>The fundamental mission remains unchanged: to preserve the documentary heritage of humanity and make it available for present and future use. Technology is simply a powerful tool in service of that enduring goal.</p>

    <h2 id="conclusion">Conclusion</h2>
    <p>Digital archives represent both a continuation of ancient traditions and a radical transformation in how we interact with the past. As technology evolves, so too will our capacity to preserve and share the written record of human civilization.</p>
  `,
  relatedPosts: [
    {
      title: "Best Practices for Manuscript Digitization",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-library/assets/item-2.webp",
        alt: "Manuscript digitization",
      },
      date: "Dec 10, 2024",
    },
    {
      title: "Understanding IIIF Standards",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-library/assets/item-3.webp",
        alt: "Digital standards",
      },
      date: "Dec 5, 2024",
    },
    {
      title: "Building Digital Collections",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-library/assets/item-4.webp",
        alt: "Digital collections",
      },
      date: "Dec 1, 2024",
    },
  ],
  cta: {
    label: "Explore Our Digital Archives",
    href: "#",
    variant: "default",
  },
}

export function BlogPost5({
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
    <article className={cn("relative", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <header
          className={cn("mx-auto mb-12 max-w-3xl", classNames.header?.root)}
        >
          <HeroText
            badge={category}
            title={title}
            description={subtitle}
            classNames={{
              badge: classNames.header?.badge,
              title: cn("text-3xl md:text-5xl", classNames.header?.title),
              description: cn("mb-6", classNames.header?.description),
            }}
          />

          {/* Meta */}
          <div
            className={cn(
              "text-muted-foreground mt-6 flex flex-wrap items-center gap-4 text-sm",
              classNames.header?.meta
            )}
          >
            {author && (
              <div className="flex items-center gap-2">
                {author.avatar && (
                  <Avatar className="h-8 w-8">
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
              "relative mx-auto mb-12 aspect-[16/9] max-w-4xl overflow-hidden rounded-lg border shadow-sm",
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
                <span className="text-muted-foreground mr-2 text-sm">
                  Share:
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Copy link"
                >
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
                  "mt-12 flex flex-wrap gap-2 border-t pt-8",
                  classNames.tags
                )}
              >
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Author Bio */}
            {author && author.bio && (
              <div
                className={cn(
                  "bg-muted/50 mt-12 rounded-lg p-6",
                  classNames.author?.root
                )}
              >
                <div className="flex items-start gap-4">
                  {author.avatar && (
                    <Avatar
                      className={cn("h-16 w-16", classNames.author?.avatar)}
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
                      <p className="text-muted-foreground mb-2 text-sm">
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
                  "bg-muted/50 mt-12 rounded-lg p-8 text-center",
                  classNames.cta
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-2xl font-bold">
                  Discover More
                </h3>
                <p className="text-muted-foreground mb-6">
                  Access our extensive collection of digitized historical
                  materials.
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
                  "bg-muted/50 sticky top-8 rounded-lg p-6",
                  classNames.tableOfContents
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-lg font-semibold">
                  Table of Contents
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
            <h2 className="font-display text-foreground mb-8 text-2xl font-bold">
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
                    "group bg-card hover:bg-muted/50 overflow-hidden rounded-lg border transition-all hover:shadow-sm",
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

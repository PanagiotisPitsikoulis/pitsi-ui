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

// Block-specific defaults that override the generic defaults
const blockDefaults = {
  title: "The Complete Guide to Indoor Plant Care",
  subtitle:
    "Everything you need to know about keeping your houseplants healthy and thriving year-round.",
  featuredImage: {
    src: "/placeholders/blocks/service-plants/assets/item-1.webp",
    alt: "Indoor plants arrangement",
  },
  author: {
    name: "Sarah Green",
    role: "Plant Expert",
    bio: "Sarah is a certified horticulturist with over 10 years of experience helping plant lovers create thriving indoor gardens.",
    avatar: {
      src: "/placeholders/avatars/1.webp",
      alt: "Sarah Green",
    },
  },
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Plant Care",
  tags: ["Indoor Plants", "Care Guide", "Beginners"],
  showShareButtons: true,
  tableOfContents: [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "lighting", title: "Understanding Light Requirements", level: 2 },
    { id: "watering", title: "Watering Best Practices", level: 2 },
    { id: "humidity", title: "Humidity & Temperature", level: 2 },
    { id: "common-problems", title: "Common Problems & Solutions", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],
  content: `
    <p class="lead">Indoor plants have become an essential part of modern home decor, bringing life, color, and a sense of nature into our living spaces. But keeping them healthy requires understanding their basic needs.</p>

    <h2 id="lighting">Understanding Light Requirements</h2>
    <p>Light is the most crucial factor in plant health. Different plants have varying light requirements, from low-light tolerant species like pothos and snake plants to sun-lovers like succulents and cacti.</p>
    <p>Most houseplants thrive in bright, indirect light. This means placing them near windows but out of direct sunlight, which can scorch leaves. East-facing windows provide gentle morning light, while north-facing windows offer consistent, low light throughout the day.</p>

    <h2 id="watering">Watering Best Practices</h2>
    <p>Overwatering is the most common cause of houseplant death. The key is to understand your specific plant's needs and check the soil moisture before watering.</p>
    <p>A simple finger test works well: insert your finger about an inch into the soil. If it feels dry, it's time to water. If it's still moist, wait a few more days. When you do water, water thoroughly until it drains from the bottom of the pot.</p>

    <h2 id="humidity">Humidity & Temperature</h2>
    <p>Most houseplants are tropical in origin and appreciate humidity levels between 40-60%. Grouping plants together or using a humidifier can help maintain adequate humidity, especially during winter when indoor heating dries the air.</p>
    <p>Temperature-wise, most houseplants prefer consistent temperatures between 65-75°F (18-24°C). Avoid placing plants near drafty windows, air conditioning vents, or heating sources.</p>

    <h2 id="common-problems">Common Problems & Solutions</h2>
    <p>Yellow leaves, brown tips, and drooping are common issues that usually indicate watering or lighting problems. Learning to read these signs helps you respond quickly.</p>
    <ul>
      <li><strong>Yellow leaves:</strong> Often indicates overwatering or poor drainage</li>
      <li><strong>Brown leaf tips:</strong> Usually a sign of low humidity or inconsistent watering</li>
      <li><strong>Drooping:</strong> Can indicate either over or underwatering—check the soil</li>
      <li><strong>Leggy growth:</strong> Your plant needs more light</li>
    </ul>

    <h2 id="conclusion">Conclusion</h2>
    <p>With the right knowledge and attention, anyone can become a successful plant parent. Start with easy-care plants like pothos, snake plants, or ZZ plants, and gradually expand your collection as you learn. Remember, every plant is different, so observe your plants closely and adjust your care routine as needed.</p>
  `,
  relatedPosts: [
    {
      title: "5 Low-Light Plants for Dark Corners",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-plants/assets/item-2.webp",
        alt: "Low light plants",
      },
      date: "Dec 10, 2024",
    },
    {
      title: "How to Propagate Your Favorite Plants",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-plants/assets/item-3.webp",
        alt: "Plant propagation",
      },
      date: "Dec 5, 2024",
    },
    {
      title: "Choosing the Right Pot for Your Plants",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-plants/assets/item-4.webp",
        alt: "Plant pots",
      },
      date: "Dec 1, 2024",
    },
  ],
  cta: {
    label: "Subscribe to Our Newsletter",
    href: "#",
    variant: "default",
  },
}

export function BlogPost1({
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
    <article className={cn("relative overflow-x-clip", classNames.root)}>
      {/* Left decoration */}
      <div
        className="pointer-events-none absolute top-0 -left-32 h-[500px] w-[500px] -rotate-12 opacity-20 select-none"
        style={{
          backgroundImage: "url('/elements/decoration-bg/plants/1.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      <div className={cn("relative z-10 container px-6", classNames.container)}>
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
              "relative mx-auto mb-12 aspect-video max-w-4xl overflow-hidden rounded-2xl",
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
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
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
                  <Badge key={tag} variant="outline" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Author Bio */}
            {author && author.bio && (
              <div
                className={cn(
                  "bg-muted/50 mt-12 rounded-2xl p-6",
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
                  "bg-primary/10 mt-12 rounded-2xl p-8 text-center",
                  classNames.cta
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-2xl font-bold">
                  Enjoyed this article?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get more plant care tips delivered to your inbox.
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
                  "bg-muted/50 sticky top-8 rounded-2xl p-6",
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
                    "group bg-card hover:bg-muted/50 overflow-hidden rounded-2xl border transition-all hover:shadow-lg",
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

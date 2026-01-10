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

// Block-specific defaults for travel template
const blockDefaults = {
  title: "The Ultimate Guide to Greek Island Hopping",
  subtitle:
    "Discover the best routes, hidden gems, and insider tips for exploring the Cyclades and beyond.",
  featuredImage: {
    src: "/placeholders/blocks/service-travel/assets/item-1.webp",
    alt: "Greek island with blue-domed churches",
  },
  author: {
    name: "Alex Wanderer",
    role: "Travel Writer",
    bio: "Alex has spent over a decade exploring the world's most beautiful destinations and sharing practical travel advice with fellow adventurers.",
    avatar: {
      src: "/placeholders/avatars/2.webp",
      alt: "Alex Wanderer",
    },
  },
  date: "December 15, 2024",
  readTime: "12 min read",
  category: "Destinations",
  tags: ["Greece", "Island Hopping", "Mediterranean", "Travel Tips"],
  showShareButtons: true,
  tableOfContents: [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "planning", title: "Planning Your Route", level: 2 },
    { id: "ferries", title: "Ferry Tips & Tricks", level: 2 },
    { id: "islands", title: "Must-Visit Islands", level: 2 },
    { id: "budget", title: "Budget Considerations", level: 2 },
    { id: "conclusion", title: "Final Thoughts", level: 1 },
  ],
  content: `
    <p class="lead">Greek island hopping is a dream for many travelers, and for good reason. With over 200 inhabited islands to choose from, each offering its own unique charm, the possibilities are endless.</p>

    <h2 id="planning">Planning Your Route</h2>
    <p>The key to successful island hopping is planning a logical route that minimizes backtracking. The Cyclades are the most popular choice for first-timers, with well-established ferry connections between islands like Mykonos, Santorini, Paros, and Naxos.</p>
    <p>Consider spending at least 2-3 nights on each island to truly soak in the atmosphere. Rushing through multiple islands in a week often leaves travelers exhausted and unable to appreciate the unique character of each destination.</p>

    <h2 id="ferries">Ferry Tips & Tricks</h2>
    <p>Ferries are the lifeblood of Greek island travel. Book your tickets in advance during peak season (July-August), as popular routes can sell out quickly. Use services like Ferryhopper to compare schedules and prices across different operators.</p>
    <p>Choose between high-speed ferries for shorter journey times or conventional ferries for a more economical and scenic experience. The Blue Star Ferries overnight service from Athens to Santorini is a classic way to start your adventure.</p>

    <h2 id="islands">Must-Visit Islands</h2>
    <p>While Santorini and Mykonos get most of the attention, don't overlook lesser-known gems:</p>
    <ul>
      <li><strong>Milos:</strong> Stunning beaches and lunar landscapes without the crowds</li>
      <li><strong>Folegandros:</strong> Authentic village life perched on dramatic cliffs</li>
      <li><strong>Sifnos:</strong> Known for its excellent cuisine and traditional pottery</li>
      <li><strong>Koufonisia:</strong> Tiny paradise with crystal-clear waters</li>
    </ul>

    <h2 id="budget">Budget Considerations</h2>
    <p>Island hopping can be done on various budgets. Accommodation ranges from affordable hostels to luxury cave hotels. Eating at local tavernas and avoiding tourist traps will significantly reduce food costs while providing a more authentic experience.</p>
    <p>Consider traveling in shoulder season (May-June or September-October) for better prices and fewer crowds while still enjoying great weather.</p>

    <h2 id="conclusion">Final Thoughts</h2>
    <p>Greek island hopping is one of those experiences that lives up to the hype. The combination of ancient history, stunning landscapes, delicious food, and warm hospitality creates memories that last a lifetime. Start planning your adventure today!</p>
  `,
  relatedPosts: [
    {
      title: "Best Beaches in the Cyclades",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-travel/assets/item-2.webp",
        alt: "Beach in Cyclades",
      },
      date: "Dec 10, 2024",
    },
    {
      title: "How to Travel Greece on a Budget",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-travel/assets/item-3.webp",
        alt: "Budget travel Greece",
      },
      date: "Dec 5, 2024",
    },
    {
      title: "Greek Food: A Complete Guide",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-travel/assets/item-4.webp",
        alt: "Greek food",
      },
      date: "Dec 1, 2024",
    },
  ],
  cta: {
    label: "Start Planning Your Trip",
    href: "#",
    variant: "default",
  },
}

export function BlogPost2({
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
      {/* Gradient background */}
      <div
        className="from-primary/5 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b via-transparent to-transparent"
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
              "relative mx-auto mb-12 aspect-[21/9] max-w-5xl overflow-hidden rounded-xl",
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
                <Button variant="outline" size="icon" className="rounded-lg">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-lg">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-lg">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Post Content */}
            {postContent && (
              <div
                className={cn(
                  "prose prose-lg dark:prose-invert max-w-none",
                  "[&_h2]:font-display [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight",
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
                  <Badge key={tag} variant="outline" className="rounded-lg">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Author Bio */}
            {author && author.bio && (
              <div
                className={cn(
                  "bg-muted/50 mt-12 rounded-xl p-6",
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
                  "bg-primary/10 mt-12 rounded-xl p-8 text-center",
                  classNames.cta
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-2xl font-bold tracking-tight">
                  Ready for Your Adventure?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let us help you plan the perfect Greek island hopping
                  itinerary.
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
                  "bg-muted/50 sticky top-8 rounded-xl p-6",
                  classNames.tableOfContents
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-lg font-semibold">
                  In This Article
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
            <h2 className="font-display text-foreground mb-8 text-center text-2xl font-bold tracking-tight">
              More Travel Stories
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
                    "group bg-card hover:bg-muted/50 overflow-hidden rounded-xl border transition-all hover:-translate-y-1 hover:shadow-md",
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

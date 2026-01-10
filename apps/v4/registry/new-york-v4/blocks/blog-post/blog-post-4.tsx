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

// Block-specific defaults for fitness template
const blockDefaults = {
  title: "The Science of Building Muscle",
  subtitle:
    "Understanding the fundamentals of hypertrophy and how to maximize your gains in the gym.",
  featuredImage: {
    src: "/placeholders/blocks/service-fitness/assets/item-1.webp",
    alt: "Athlete performing deadlift",
  },
  author: {
    name: "Coach Mike Torres",
    role: "Strength & Conditioning Coach",
    bio: "Mike is a certified strength coach with a Master's in Exercise Science. He has helped hundreds of athletes achieve their performance goals.",
    avatar: {
      src: "/placeholders/avatars/4.webp",
      alt: "Coach Mike Torres",
    },
  },
  date: "December 15, 2024",
  readTime: "10 min read",
  category: "Training",
  tags: ["Strength Training", "Hypertrophy", "Muscle Building", "Science"],
  showShareButtons: true,
  tableOfContents: [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "mechanics", title: "Muscle Growth Mechanics", level: 2 },
    { id: "training", title: "Training Principles", level: 2 },
    { id: "nutrition", title: "Nutrition Strategies", level: 2 },
    { id: "recovery", title: "Recovery Optimization", level: 2 },
    { id: "conclusion", title: "Putting It All Together", level: 1 },
  ],
  content: `
    <p class="lead">Building muscle isn't just about lifting heavy weights—it's a complex process that requires understanding the science behind hypertrophy and applying evidence-based training principles.</p>

    <h2 id="mechanics">Muscle Growth Mechanics</h2>
    <p>Muscle hypertrophy occurs through three primary mechanisms: mechanical tension, metabolic stress, and muscle damage. Of these, mechanical tension—created by lifting heavy loads through a full range of motion—is the most important driver of muscle growth.</p>
    <p>When you challenge your muscles with progressive overload, you create micro-tears in the muscle fibers. Your body responds by repairing these fibers and making them stronger and larger to handle future stress.</p>

    <h2 id="training">Training Principles</h2>
    <p>Effective training for muscle growth requires attention to several key variables:</p>
    <ul>
      <li><strong>Volume:</strong> 10-20 sets per muscle group per week for most people</li>
      <li><strong>Intensity:</strong> Working in the 60-85% of 1RM range</li>
      <li><strong>Frequency:</strong> Training each muscle group 2-3 times per week</li>
      <li><strong>Progressive Overload:</strong> Gradually increasing demands over time</li>
    </ul>

    <h2 id="nutrition">Nutrition Strategies</h2>
    <p>Training provides the stimulus, but nutrition provides the raw materials for growth. Protein intake should be prioritized at 1.6-2.2 grams per kilogram of body weight daily, spread across 4-6 meals for optimal muscle protein synthesis.</p>
    <p>Caloric surplus is essential for muscle gain—aim for 200-500 calories above maintenance. Carbohydrates fuel intense training sessions, while fats support hormone production and overall health.</p>

    <h2 id="recovery">Recovery Optimization</h2>
    <p>Growth happens during recovery, not during training. Prioritize 7-9 hours of quality sleep, manage stress levels, and allow adequate rest between training sessions targeting the same muscle groups.</p>
    <p>Consider incorporating active recovery methods like walking, mobility work, and foam rolling to enhance blood flow and reduce muscle soreness.</p>

    <h2 id="conclusion">Putting It All Together</h2>
    <p>Building muscle is a marathon, not a sprint. Consistency over months and years beats intensity over days. Focus on progressive overload, adequate nutrition, and quality recovery—the results will follow.</p>
  `,
  relatedPosts: [
    {
      title: "Complete Nutrition Guide for Athletes",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-fitness/assets/item-2.webp",
        alt: "Healthy meal prep",
      },
      date: "Dec 10, 2024",
    },
    {
      title: "Recovery Techniques That Actually Work",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-fitness/assets/item-3.webp",
        alt: "Recovery stretching",
      },
      date: "Dec 5, 2024",
    },
    {
      title: "Programming for Maximum Strength",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-fitness/assets/item-4.webp",
        alt: "Strength training",
      },
      date: "Dec 1, 2024",
    },
  ],
  cta: {
    label: "Start Your Training Program",
    href: "#",
    variant: "default",
  },
}

export function BlogPost4({
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
      {/* Neon glow effect */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(var(--primary) / 0.15), transparent 50%)",
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
              title: cn(
                "text-3xl md:text-5xl uppercase",
                classNames.header?.title
              ),
              description: cn("mb-6", classNames.header?.description),
            }}
          />

          {/* Meta */}
          <div
            className={cn(
              "text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-4 text-sm tracking-wider uppercase",
              classNames.header?.meta
            )}
          >
            {author && (
              <div className="flex items-center gap-2">
                {author.avatar && (
                  <Avatar className="border-primary/30 h-8 w-8 border">
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
              "border-primary/30 relative mx-auto mb-12 aspect-video max-w-5xl overflow-hidden border",
              classNames.header?.featuredImage
            )}
          >
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt || ""}
              fill
              className="object-cover"
            />
            <div className="from-background/50 absolute inset-0 bg-gradient-to-t to-transparent" />
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
                <span className="text-muted-foreground mr-2 text-xs tracking-wider uppercase">
                  Share:
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 rounded-none"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 rounded-none"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 rounded-none"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 rounded-none"
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
                  "[&_h2]:font-display [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-wide [&_h2]:uppercase",
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
                  "border-primary/30 mt-12 flex flex-wrap gap-2 border-t pt-8",
                  classNames.tags
                )}
              >
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-primary/30 rounded-none text-xs tracking-wider uppercase"
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
                  "bg-card/80 border-primary/30 mt-12 border p-6 backdrop-blur-sm",
                  classNames.author?.root
                )}
              >
                <div className="flex items-start gap-4">
                  {author.avatar && (
                    <Avatar
                      className={cn(
                        "border-primary/30 h-16 w-16 border",
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
                        "font-display text-foreground text-lg font-bold tracking-wide uppercase",
                        classNames.author?.name
                      )}
                    >
                      {author.name}
                    </p>
                    {author.role && (
                      <p className="text-primary mb-2 text-sm tracking-wider uppercase">
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
                  "border-primary/30 bg-primary/10 mt-12 border p-8 text-center",
                  classNames.cta
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-2xl font-bold tracking-wide uppercase">
                  Ready to Transform?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands who have achieved their fitness goals with
                  science-based training.
                </p>
                <Button
                  asChild
                  className="rounded-none tracking-wider uppercase"
                >
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
                  "bg-card/80 border-primary/30 sticky top-8 border p-6 backdrop-blur-sm",
                  classNames.tableOfContents
                )}
              >
                <h3 className="font-display text-foreground mb-4 text-lg font-bold tracking-wide uppercase">
                  Contents
                </h3>
                <nav>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={cn(
                            "text-muted-foreground hover:text-primary block text-sm transition-colors",
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
            <h2 className="font-display text-foreground mb-8 text-center text-2xl font-bold tracking-wide uppercase">
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
                    "group bg-card/80 border-border/50 hover:shadow-primary/10 hover:border-primary/30 border backdrop-blur-sm transition-all hover:shadow-lg",
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
                      <div className="from-background/50 absolute inset-0 bg-gradient-to-t to-transparent" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-display text-foreground group-hover:text-primary mb-2 font-bold tracking-wide uppercase transition-colors">
                      {post.title}
                    </h3>
                    {post.date && (
                      <p className="text-muted-foreground text-xs tracking-wider uppercase">
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

"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"

interface TestimonialsBlockProps {
  content?: {
    title?: string
    description?: string
    posts?: Array<{
      content: string
      author: {
        name: string
        handle: string
        avatar: string
        verified: boolean
      }
      likes: number
      retweets: number
      replies: number
      date: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const testimonials7Defaults = {
  title: "What People Are Saying",
  description: "Join thousands of happy customers sharing their experience.",
  posts: [
    {
      content:
        "Just switched to @company and wow, the difference is night and day. Why didn't I do this sooner? 🚀",
      author: {
        name: "Sarah Johnson",
        handle: "@sarahj_dev",
        avatar: "/avatars/01.webp",
        verified: true,
      },
      likes: 234,
      retweets: 45,
      replies: 12,
      date: "2h",
    },
    {
      content:
        "Finally a tool that just works. No complicated setup, no learning curve. Just pure productivity. ✨",
      author: {
        name: "Mike Chen",
        handle: "@mikechen",
        avatar: "/avatars/02.webp",
        verified: false,
      },
      likes: 189,
      retweets: 28,
      replies: 8,
      date: "5h",
    },
    {
      content:
        "Customer support replied in 5 minutes. FIVE MINUTES. On a Sunday. 🤯 @company you've got a customer for life.",
      author: {
        name: "Emily Rodriguez",
        handle: "@emilyrod",
        avatar: "/avatars/03.webp",
        verified: true,
      },
      likes: 567,
      retweets: 89,
      replies: 34,
      date: "1d",
    },
    {
      content:
        "Our team productivity is up 40% since we started using this. The analytics dashboard alone is worth the price.",
      author: {
        name: "David Park",
        handle: "@davidp_cto",
        avatar: "/avatars/04.webp",
        verified: true,
      },
      likes: 412,
      retweets: 67,
      replies: 21,
      date: "2d",
    },
    {
      content:
        "I've recommended @company to at least 10 people this week. It's that good. 💯",
      author: {
        name: "Lisa Wang",
        handle: "@lisawang",
        avatar: "/avatars/05.webp",
        verified: false,
      },
      likes: 156,
      retweets: 23,
      replies: 5,
      date: "3d",
    },
    {
      content:
        "The attention to detail in this product is incredible. Every feature feels thoughtfully designed.",
      author: {
        name: "James Wilson",
        handle: "@jameswilson",
        avatar: "/avatars/06.webp",
        verified: false,
      },
      likes: 298,
      retweets: 41,
      replies: 15,
      date: "3d",
    },
    {
      content:
        "Just had the smoothest onboarding experience ever. From signup to fully operational in under an hour!",
      author: {
        name: "Amanda Foster",
        handle: "@amandaf",
        avatar: "/avatars/07.webp",
        verified: true,
      },
      likes: 378,
      retweets: 52,
      replies: 19,
      date: "4d",
    },
    {
      content:
        "Been using @company for 6 months now. Still discovering new features that make my life easier. 🙌",
      author: {
        name: "Kevin Anderson",
        handle: "@kevina_tech",
        avatar: "/avatars/08.webp",
        verified: false,
      },
      likes: 201,
      retweets: 34,
      replies: 9,
      date: "5d",
    },
  ],
}

export function Testimonials7({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    title = testimonials7Defaults.title,
    description = testimonials7Defaults.description,
    posts = testimonials7Defaults.posts,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mx-auto max-w-2xl",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3 xl:columns-4">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-background border-border mb-4 break-inside-avoid rounded-xl border p-4"
            >
              {/* Author Header */}
              <div className="mb-3 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-foreground text-sm font-semibold">
                      {post.author.name}
                    </span>
                    {post.author.verified && (
                      <svg
                        className="h-4 w-4 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {post.author.handle}
                  </span>
                </div>
                <span className="text-muted-foreground text-xs">
                  {post.date}
                </span>
              </div>

              {/* Content */}
              <p className="text-foreground mb-3 text-sm leading-relaxed">
                {post.content}
              </p>

              {/* Engagement */}
              <div className="text-muted-foreground flex items-center gap-4 text-xs">
                <button className="flex items-center gap-1 transition-colors hover:text-red-500">
                  <DynamicIcon name="Heart" className="h-4 w-4" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 transition-colors hover:text-green-500">
                  <DynamicIcon name="Repeat2" className="h-4 w-4" />
                  {post.retweets}
                </button>
                <button className="hover:text-primary flex items-center gap-1 transition-colors">
                  <DynamicIcon name="MessageCircle" className="h-4 w-4" />
                  {post.replies}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

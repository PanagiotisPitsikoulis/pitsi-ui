import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import {
  type BlogCategory,
  generateBlogStaticParams,
  getBlogCategories,
  getBlogPost,
  getPaginatedBlogPosts,
} from "@/lib/blog/source"
import { mdxComponents } from "@/mdx-components"
import { absoluteUrl } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { LayoutGrid, LayoutGridItem } from "../../(root)/_components/layout-grid"
import { StripeBgGuides } from "../../(root)/_components/striped-bg-guides"
import { BlogList } from "../_components/blog-list"
import { BlogPagination } from "../_components/blog-pagination"

// Category labels for display
const categoryLabels: Record<BlogCategory, string> = {
  tutorial: "Tutorial",
  announcement: "Announcement",
  "deep-dive": "Deep Dive",
  design: "Design",
}

function PlayingCardsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 116 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1px"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M5.05084 25.528V45.528L3.46088 42.908C2.96088 42.208 2.7009 41.518 2.6709 40.828V20.708C2.6709 21.438 2.93088 22.168 3.46088 22.908L5.05084 25.528Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M80.0012 34.2878C79.5412 34.8778 78.8212 35.3178 77.8312 35.5978L64.6212 39.8978C63.8212 40.1478 63.0213 40.1678 62.2213 39.9478C61.4113 39.7378 60.9512 39.3778 60.8212 38.8778L58.0012 30.3278C57.8112 29.6478 57.9513 29.0178 58.4113 28.4278C58.8713 27.8478 59.5912 27.4078 60.5712 27.1278L71.3513 23.6078L73.7813 22.8178C74.5813 22.5778 75.3812 22.5578 76.1912 22.7678C76.9912 22.9878 77.4612 23.3478 77.5812 23.8478L78.1013 25.4278L80.4012 32.3978C80.5912 33.0778 80.4612 33.7078 80.0012 34.2878Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M113.001 18.1084V19.4984C113.111 19.0384 113.111 18.5784 113.001 18.1084Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M30.7809 10.668L5.05084 25.528L3.46088 22.908C2.93088 22.168 2.6709 21.438 2.6709 20.708V20.668C2.6809 19.868 3.0109 19.078 3.6709 18.288C4.9209 16.778 6.94088 15.718 9.71088 15.118L30.7809 10.668Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M33.9708 17.4082L30.7808 21.3782L21.7908 32.5682L16.8508 38.7182L16.7808 38.7982C16.5308 39.1582 16.2708 39.4882 16.0008 39.7882C15.7208 40.0882 15.5508 40.4382 15.4908 40.8282L14.3408 40.1682L11.8708 38.7382C10.2008 37.7682 9.21079 36.6282 8.93079 35.3082C8.87079 35.0382 8.84082 34.7682 8.84082 34.4782V34.4282C8.87082 32.7382 9.89084 31.3082 11.9208 30.1382L30.7808 19.2482L33.9708 17.4082Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M113.001 18.1081C112.901 17.6281 112.691 17.1481 112.381 16.6681C111.351 15.0781 109.541 13.9281 106.951 13.2081L68.8613 2.93809C66.2713 2.21809 63.6013 2.15808 60.8613 2.73808C58.1213 3.31808 56.1313 4.35809 54.9113 5.84809L33.9713 31.7881L26.2313 41.3781C26.0113 41.6481 25.8312 41.9181 25.6812 42.1881C25.3912 42.7281 25.2412 43.2781 25.2412 43.8281C25.2412 44.5481 25.4913 45.2781 25.9813 46.0281C26.1413 46.2681 26.3112 46.4881 26.5012 46.7081C27.6012 47.9581 29.2512 48.8981 31.4612 49.5081L35.0312 50.4681L60.2913 57.2881L67.0512 59.1081L69.5413 59.7781C72.1413 60.4981 74.8012 60.5681 77.5512 59.9881C80.2912 59.3981 82.2712 58.3581 83.5012 56.8681L103.301 32.2181L112.081 21.2881C112.571 20.6981 112.871 20.0981 113.011 19.4981V18.1081H113.001ZM80.0012 34.2881C79.5412 34.8781 78.8212 35.3181 77.8312 35.5981L64.6212 39.8981C63.8212 40.1481 63.0213 40.1681 62.2213 39.9481C61.4113 39.7381 60.9512 39.3781 60.8212 38.8781L58.0012 30.3281C57.8112 29.6481 57.9513 29.0181 58.4113 28.4281C58.8713 27.8481 59.5912 27.4081 60.5712 27.1281L71.3513 23.6081L73.7812 22.8181C74.5813 22.5781 75.3812 22.5581 76.1912 22.7681C76.9912 22.9881 77.4612 23.3481 77.5812 23.8481L78.1013 25.4281L80.4012 32.3981C80.5912 33.0781 80.4612 33.7081 80.0012 34.2881Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M15.4911 40.8276V60.8276L11.8711 58.7376C9.83108 57.5576 8.82111 56.1176 8.84111 54.4276V35.3376C8.84111 35.3376 8.90108 35.3076 8.93108 35.3076C9.21108 36.6276 10.2011 37.7676 11.8711 38.7376L14.3411 40.1676L15.4911 40.8276Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M33.9713 17.4082V31.7882L26.2313 41.3782C26.0113 41.6482 25.8312 41.9182 25.6812 42.1882C25.3912 42.7282 25.2412 43.2782 25.2412 43.8282V48.2682L16.7812 58.7982C16.5312 59.1582 16.2712 59.4882 16.0012 59.7882C15.7212 60.0882 15.5512 60.4382 15.4912 60.8282V40.8282C15.5512 40.4382 15.7212 40.0882 16.0012 39.7882C16.2712 39.4882 16.5312 39.1582 16.7812 38.7982L16.8513 38.7182L21.7913 32.5682L30.7812 21.3782L33.9713 17.4082Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M30.7808 10.668V19.248L11.9208 30.138C9.89084 31.308 8.87082 32.738 8.84082 34.428V43.338L5.05078 45.528V25.528L30.7808 10.668Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M113.081 39.2081V38.8281"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M25.2412 64.3881V63.8281"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M113.081 38.768V38.828C113.071 39.658 112.741 40.4881 112.081 41.2881L83.5012 76.868C82.2712 78.358 80.2912 79.398 77.5512 79.988C74.8012 80.568 72.1413 80.498 69.5413 79.778L31.4612 69.5081C28.8612 68.7881 27.0413 67.628 25.9813 66.028C25.4913 65.278 25.2412 64.548 25.2412 63.828V43.828C25.2412 44.548 25.4913 45.278 25.9813 46.028C26.1413 46.268 26.3112 46.488 26.5012 46.708C27.6012 47.958 29.2512 48.8981 31.4612 49.5081L35.0312 50.468L60.2913 57.2881L67.0512 59.108L69.5413 59.778C72.1413 60.498 74.8012 60.568 77.5512 59.988C80.2912 59.398 82.2712 58.358 83.5012 56.868L103.301 32.218L112.081 21.2881C112.571 20.6981 112.871 20.098 113.011 19.498L113.081 38.768Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M25.2412 43.8284V43.6084"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function CategoryBadge({ category }: { category: BlogCategory }) {
  return (
    <Badge variant="outline" className="font-mono text-xs">
      {categoryLabels[category]}
    </Badge>
  )
}

// Parse slug to determine page type
function parseSlug(slug?: string[]): {
  type: "index" | "post" | "page" | "category" | "category-page"
  page?: number
  category?: BlogCategory
  postSlug?: string
} {
  if (!slug || slug.length === 0) {
    return { type: "index", page: 1 }
  }

  // /blog/page/2
  if (slug[0] === "page" && slug.length === 2) {
    const pageNum = parseInt(slug[1], 10)
    if (!isNaN(pageNum) && pageNum > 0) {
      return { type: "page", page: pageNum }
    }
  }

  // /blog/category/tutorial
  if (slug[0] === "category" && slug.length >= 2) {
    const category = slug[1] as BlogCategory
    if (getBlogCategories().includes(category)) {
      // /blog/category/tutorial/page/2
      if (slug.length === 4 && slug[2] === "page") {
        const pageNum = parseInt(slug[3], 10)
        if (!isNaN(pageNum) && pageNum > 0) {
          return { type: "category-page", category, page: pageNum }
        }
      }
      return { type: "category", category, page: 1 }
    }
  }

  // /blog/post-slug
  if (slug.length === 1) {
    return { type: "post", postSlug: slug[0] }
  }

  return { type: "index", page: 1 }
}

export function generateStaticParams() {
  return generateBlogStaticParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
  const params = await props.params
  const parsed = parseSlug(params.slug)

  // Individual post
  if (parsed.type === "post" && parsed.postSlug) {
    const post = getBlogPost(parsed.postSlug)
    if (!post) {
      return { title: "Post Not Found" }
    }

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: absoluteUrl(`/blog/${post.slug}`),
        publishedTime: post.date,
        images: [
          {
            url: `/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [
          {
            url: `/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}`,
          },
        ],
        creator: "@pitsitsi",
      },
    }
  }

  // Category page
  if (parsed.type === "category" || parsed.type === "category-page") {
    const categoryLabel = categoryLabels[parsed.category!]
    const title =
      parsed.page && parsed.page > 1
        ? `${categoryLabel} Articles - Page ${parsed.page}`
        : `${categoryLabel} Articles`
    const description = `Browse ${categoryLabel.toLowerCase()} articles from the pitsi/ui team.`

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: absoluteUrl(
          parsed.page && parsed.page > 1
            ? `/blog/category/${parsed.category}/page/${parsed.page}`
            : `/blog/category/${parsed.category}`
        ),
        images: [
          {
            url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [
          {
            url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          },
        ],
      },
    }
  }

  // Index or paginated index
  const title =
    parsed.page && parsed.page > 1 ? `Blog - Page ${parsed.page}` : "Blog"
  const description = "Insights, tutorials, and updates from the pitsi/ui team."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(
        parsed.page && parsed.page > 1 ? `/blog/page/${parsed.page}` : "/blog"
      ),
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
  }
}

export default async function BlogPage(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const parsed = parseSlug(params.slug)

  // Individual post page
  if (parsed.type === "post" && parsed.postSlug) {
    const post = getBlogPost(parsed.postSlug)
    if (!post) {
      notFound()
    }

    const MDXContent = post.body

    return (
      <div className="relative -mt-[56px] min-h-screen overflow-x-clip">
        <StripeBgGuides columnCount={6} animated={false} />

        <div className="relative z-10 container px-6">
          <Spacer size="6xl" sizeMobile="4xl" />
          <LayoutGrid>
            <LayoutGridItem span={6} spanLg={2}>
              <div className="lg:sticky lg:top-24">
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  Back to blog
                </Link>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                    {formatDate(post.date)}
                  </time>
                  <CategoryBadge category={post.category} />
                </div>
                <Spacer size="sm" sizeMobile="xs" />
                <h1 className="display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <Spacer size="md" sizeMobile="sm" />
                <p className="text-muted-foreground text-base md:text-lg">
                  {post.description}
                </p>
                <Spacer size="md" sizeMobile="sm" />
                {post.readTime && (
                  <span className="text-muted-foreground text-sm">
                    {post.readTime}
                  </span>
                )}
              </div>
            </LayoutGridItem>

            <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="aspect-video w-full rounded-2xl object-cover shadow-sm"
                />
              )}

              <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none [&_h2]:display [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:tracking-tight md:[&_h2]:text-2xl [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_li]:text-muted-foreground [&_strong]:text-foreground">
                <MDXContent components={mdxComponents} />
              </div>
            </LayoutGridItem>
          </LayoutGrid>
          <Spacer size="6xl" sizeMobile="4xl" />
        </div>
      </div>
    )
  }

  // Index or paginated list pages
  const page = parsed.page || 1
  const category = parsed.category
  const paginatedData = getPaginatedBlogPosts(page, category)

  // Redirect to page 1 if page is out of bounds
  if (page > paginatedData.totalPages && paginatedData.totalPages > 0) {
    notFound()
  }

  // Serialize posts for display (remove body)
  const serializedPosts = paginatedData.posts.map(({ body, ...post }) => post)

  // Build base path for pagination links
  const basePath = category ? `/blog/category/${category}` : "/blog"

  // Page title
  const pageTitle = category
    ? `${categoryLabels[category]} Articles`
    : "Blog"
  const pageSubtitle = category
    ? `Browse ${categoryLabels[category].toLowerCase()} articles from the pitsi/ui team.`
    : "Insights, tutorials, and updates from the pitsi/ui team."

  return (
    <div className="relative -mt-[56px] min-h-screen overflow-x-clip">
      <StripeBgGuides columnCount={6} animated={false} />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />
        <LayoutGrid>
          <LayoutGridItem span={6} spanLg={2}>
            <div className="lg:sticky lg:top-24">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to home
              </Link>
              <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                {category ? categoryLabels[category] : "Articles"}
              </p>
              <Spacer size="md" sizeMobile="sm" />
              <h1 className="display text-4xl leading-[0.9] tracking-tight md:text-5xl lg:text-6xl">
                {pageTitle}
                {page > 1 && (
                  <span className="text-muted-foreground"> - Page {page}</span>
                )}
              </h1>
              <Spacer size="lg" sizeMobile="md" />
              <p className="text-muted-foreground text-base md:text-lg">
                {pageSubtitle}
              </p>
              <Spacer size="6xl" sizeMobile="2xl" />
              <div className="flex justify-center">
                <PlayingCardsIcon className="text-brand w-48" />
              </div>
            </div>
          </LayoutGridItem>

          <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
            <BlogList
              posts={serializedPosts}
              currentCategory={category}
            />

            {paginatedData.totalPages > 1 && (
              <>
                <Spacer size="xl" sizeMobile="lg" />
                <BlogPagination
                  currentPage={paginatedData.currentPage}
                  totalPages={paginatedData.totalPages}
                  basePath={basePath}
                />
              </>
            )}
          </LayoutGridItem>
        </LayoutGrid>
        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}

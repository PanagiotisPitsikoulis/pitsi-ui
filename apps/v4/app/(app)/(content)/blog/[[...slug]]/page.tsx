import { Metadata } from "next"
import { notFound } from "next/navigation"
import { cacheLife } from "next/cache"

import {
  categoryLabels,
  generateBlogStaticParams,
  getBlogPost,
  getPaginatedBlogPosts,
  parseSlug,
} from "@/lib/blog/source"
import { absoluteUrl } from "@/lib/utils"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { PlayingCardsIcon } from "@/components/icons/hero-icons"
import { ContentPageLayout } from "@/components/layout/content-page-layout"

import {
  BlogList,
  BlogListSidebar,
  BlogPagination,
  BlogPostContent,
  BlogPostSidebar,
} from "@/components/blog"

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
  "use cache"
  cacheLife("max")

  const params = await props.params
  const parsed = parseSlug(params.slug)

  // Individual post page
  if (parsed.type === "post" && parsed.postSlug) {
    const post = getBlogPost(parsed.postSlug)
    if (!post) {
      notFound()
    }

    return (
      <ContentPageLayout
        sidebar={
          <BlogPostSidebar
            date={post.date}
            category={post.category}
            title={post.title}
            description={post.description}
            readTime={post.readTime}
          />
        }
      >
        <BlogPostContent image={post.image} MDXContent={post.body} />
      </ContentPageLayout>
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

  return (
    <ContentPageLayout
      sidebar={
        <BlogListSidebar
          category={category}
          page={page}
          icon={<PlayingCardsIcon className="text-brand w-48" />}
        />
      }
    >
      <BlogList posts={serializedPosts} currentCategory={category} />

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
    </ContentPageLayout>
  )
}

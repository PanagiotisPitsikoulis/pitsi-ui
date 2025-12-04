import { blog } from "@/.source"

export type BlogCategory = "tutorial" | "announcement" | "deep-dive" | "design"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author?: string
  category: BlogCategory
  image?: string
  readTime?: string
  body: React.ComponentType
}

export interface PaginatedBlogPosts {
  posts: BlogPost[]
  totalPosts: number
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export const POSTS_PER_PAGE = 10

export function getBlogPosts(): BlogPost[] {
  return (blog as any[])
    .map((page: any) => ({
      slug: page.info?.path?.replace(/\.mdx$/, "") || "",
      title: page.title || "",
      description: page.description || "",
      date: page.date || "",
      author: page.author,
      category: page.category || "tutorial",
      image: page.image,
      readTime: page.readTime,
      body: page.body,
    }))
    .filter((post) => post.slug && post.title)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const posts = getBlogPosts()
  return posts.find((post) => post.slug === slug)
}

export function getBlogPostSlugs(): string[] {
  return getBlogPosts().map((post) => post.slug)
}

export function getPaginatedBlogPosts(
  page: number = 1,
  category?: BlogCategory
): PaginatedBlogPosts {
  let allPosts = getBlogPosts()

  // Filter by category if provided
  if (category) {
    allPosts = allPosts.filter((post) => post.category === category)
  }

  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  const currentPage = Math.max(1, Math.min(page, totalPages || 1))

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    posts,
    totalPosts,
    totalPages,
    currentPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  }
}

export function getTotalPages(category?: BlogCategory): number {
  let allPosts = getBlogPosts()
  if (category) {
    allPosts = allPosts.filter((post) => post.category === category)
  }
  return Math.ceil(allPosts.length / POSTS_PER_PAGE)
}

export function getBlogCategories(): BlogCategory[] {
  return ["tutorial", "announcement", "deep-dive", "design"]
}

export function generateBlogStaticParams(): { slug?: string[] }[] {
  const params: { slug?: string[] }[] = []

  // Index page (no slug)
  params.push({})

  // Individual post pages
  const slugs = getBlogPostSlugs()
  slugs.forEach((slug) => {
    params.push({ slug: [slug] })
  })

  // Pagination pages
  const totalPages = getTotalPages()
  for (let i = 2; i <= totalPages; i++) {
    params.push({ slug: ["page", String(i)] })
  }

  // Category pages
  const categories = getBlogCategories()
  categories.forEach((category) => {
    params.push({ slug: ["category", category] })

    // Category pagination pages
    const categoryTotalPages = getTotalPages(category)
    for (let i = 2; i <= categoryTotalPages; i++) {
      params.push({ slug: ["category", category, "page", String(i)] })
    }
  })

  return params
}

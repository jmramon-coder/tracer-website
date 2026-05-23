import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostArticle } from "@/components/blog-post-article"
import { getPost, getAllPostSlugs } from "@/lib/blog"
import { alternatesFor, localizePath } from "@/lib/localized-paths"
import { createArticleMetadata } from "@/lib/metadata"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return createArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    image: post.image,
    publishedTime: post.date,
    authors: [post.author],
    languages: alternatesFor(`/blog/${slug}`, localizePath(`/blog/${slug}`, "fr")),
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostArticle post={post} language="en" path={`/blog/${slug}`} />
}

import { notFound } from "next/navigation"
import { BlogPostArticle } from "@/components/blog-post-article"
import { getPost } from "@/lib/blog"
import { alternatesFor } from "@/lib/localized-paths"
import { createArticleMetadata } from "@/lib/metadata"

const slug = "research-security-screening-guide"
const path = "/fr/blog/guide-verification-securite-recherche"

export async function generateMetadata() {
  const post = await getPost(slug)
  if (!post) return {}

  return createArticleMetadata({
    title: post.titleFr,
    description: post.descriptionFr,
    path,
    image: post.image,
    publishedTime: post.date,
    authors: [post.author],
    languages: alternatesFor(`/blog/${slug}`, path),
    locale: "fr_CA",
  })
}

export default async function GuideVerificationSecuriteRecherchePage() {
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostArticle post={post} language="fr" path={path} />
}

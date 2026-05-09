import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export interface BlogPost {
  slug: string
  title: string
  titleFr: string
  description: string
  descriptionFr: string
  date: string
  author: string
  tags: string[]
  tagsFr: string[]
  image?: string
  content: string
  contentFr: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  titleFr: string
  description: string
  descriptionFr: string
  date: string
  author: string
  tags: string[]
  tagsFr: string[]
  image?: string
}

const LOCALIZED_CONTENT_SEPARATOR = /<!--\s*fr\s*-->/i

function splitLocalizedMarkdown(rawContent: string) {
  const [enContent, frContent] = rawContent.split(LOCALIZED_CONTENT_SEPARATOR)

  return {
    en: enContent.trim(),
    fr: (frContent ?? enContent).trim(),
  }
}

async function renderMarkdown(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs()
  return slugs
    .map((slug) => getPostMeta(slug))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data } = matter(fileContent)

  return {
    slug,
    title: data.title ?? "",
    titleFr: data.titleFr ?? data.title ?? "",
    description: data.description ?? "",
    descriptionFr: data.descriptionFr ?? data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    tags: data.tags ?? [],
    tagsFr: data.tagsFr ?? data.tags ?? [],
    image: data.image,
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content: rawContent } = matter(fileContent)
  const localizedContent = splitLocalizedMarkdown(rawContent)

  return {
    slug,
    title: data.title ?? "",
    titleFr: data.titleFr ?? data.title ?? "",
    description: data.description ?? "",
    descriptionFr: data.descriptionFr ?? data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    tags: data.tags ?? [],
    tagsFr: data.tagsFr ?? data.tags ?? [],
    image: data.image,
    content: await renderMarkdown(localizedContent.en),
    contentFr: await renderMarkdown(localizedContent.fr),
  }
}

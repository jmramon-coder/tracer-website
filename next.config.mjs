import path from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = path.dirname(fileURLToPath(import.meta.url))

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: repoRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          ...securityHeaders.filter((header) => header.key !== "X-Frame-Options"),
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://ramonjm.vercel.app",
          },
        ],
      },
      {
        source: "/:path+",
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig

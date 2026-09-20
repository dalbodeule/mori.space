import type { APIRoute } from "astro";
import { getEmDashCollection, getSiteSettings } from "emdash";

export const GET: APIRoute = async ({ url }) => {
  const settings = await getSiteSettings();
  const { entries } = await getEmDashCollection("posts", {
    orderBy: { published_at: "desc" },
    limit: 30,
  });
  const siteUrl = url.origin;
  const items = entries.map((post) => {
    const postUrl = `${siteUrl}/posts/${post.id}`;
    return `<item><title>${escapeXml(String(post.data.title || "Untitled"))}</title><link>${postUrl}</link><guid>${postUrl}</guid><description>${escapeXml(String(post.data.summary || ""))}</description></item>`;
  }).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeXml(String(settings?.title || "mori.space"))}</title><link>${siteUrl}</link><description>${escapeXml(String(settings?.tagline || "개발과 작업 기록"))}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
};

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

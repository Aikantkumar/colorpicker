// export async function onRequest(context) {
//   const { request } = context;
//   const host = new URL(request.url).host;

//   let body = 'User-agent: *\nAllow: /\n';
//   if (host.endsWith('.pages.dev')) {
//     body = 'User-agent: *\nDisallow: /\n';
//   }

//   return new Response(body, {
//     headers: { 'Content-Type': 'text/plain' },
//   });
// }

export async function onRequest(context) {
  const { request } = context;
  const hostname = new URL(request.url).hostname;

  // Prevent crawling of Cloudflare Pages deployment URLs.
  if (hostname.endsWith(".pages.dev")) {
    return new Response(
      "User-agent: *\nDisallow: /\n",
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache",
        },
      }
    );
  }

  // Full robots.txt for the custom production domain.
  const body = `# Robots.txt for Find and Extract Colors
# https://findandextractcolors.com

User-agent: *
Allow: /

# Disallow error pages & non-indexable utility resources
Disallow: /404
Disallow: /500
Disallow: /404.html
Disallow: /500.html

# XML Sitemaps
Sitemap: https://findandextractcolors.com/sitemap-index.xml
Sitemap: https://findandextractcolors.com/sitemap-0.xml
Sitemap: https://findandextractcolors.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
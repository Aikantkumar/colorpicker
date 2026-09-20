export async function onRequest(context) {
  const { request } = context;
  const host = new URL(request.url).host;

  let body = 'User-agent: *\nAllow: /\n';
  if (host.endsWith('.pages.dev')) {
    body = 'User-agent: *\nDisallow: /\n';
  }

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
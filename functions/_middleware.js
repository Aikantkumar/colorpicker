export async function onRequest(context) {
  const { request, next } = context;
  const host = new URL(request.url).host;

  const response = await next();

  if (host.endsWith('.pages.dev')) {
    response.headers.set('X-Robots-Tag', 'noindex');
  }

  return response;
}
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const runtime = 'edge';

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

const MAX_COMMENTS = 100;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = (searchParams.get('page') || 'home').replace(/[^a-z0-9-]/gi, '');

  try {
    const { env } = await getCloudflareContext();
    const raw = await env.COMMENTS.get(`comments:${page}`);
    const comments: Comment[] = raw ? JSON.parse(raw) : [];
    return Response.json(comments);
  } catch {
    return Response.json([]);
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = (searchParams.get('page') || 'home').replace(/[^a-z0-9-]/gi, '');

  let body: { name?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = (body.name || '').trim().slice(0, 30);
  const message = (body.message || '').trim().slice(0, 280);

  if (!name || !message) {
    return Response.json({ error: 'Name and message are required' }, { status: 400 });
  }

  const newComment: Comment = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    message,
    timestamp: Date.now(),
  };

  try {
    const { env } = await getCloudflareContext();
    const raw = await env.COMMENTS.get(`comments:${page}`);
    const comments: Comment[] = raw ? JSON.parse(raw) : [];
    comments.unshift(newComment);
    if (comments.length > MAX_COMMENTS) comments.splice(MAX_COMMENTS);
    await env.COMMENTS.put(`comments:${page}`, JSON.stringify(comments));
    return Response.json(newComment, { status: 201 });
  } catch {
    return Response.json({ error: 'Failed to save comment' }, { status: 500 });
  }
}

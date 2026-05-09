'use client';

import { useEffect, useState, useRef } from 'react';

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: number;
  emoji: string;
}

interface CommentBoxProps {
  page: string;
}

function timeAgo(ts: number) {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function CommentBox({ page }: CommentBoxProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    fetch(`/api/comments?page=${page}`)
      .then((r) => r.json())
      .then((data) => { setComments(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [page]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) { setError('Please fill in both fields.'); return; }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(`/api/comments?page=${page}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
      if (!res.ok) { setError('Failed to post comment. Try again.'); return; }
      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]);
      setName('');
      setMessage('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{ padding: '4rem 0', background: '#FAFAFA', borderTop: '2px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-label">Community</div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
              Island{' '}
              <span style={{ background: 'linear-gradient(135deg, #FF5AA5, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Chat
              </span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Share your thoughts — no account needed. Be kind to fellow islanders!
            </p>
          </div>

          {/* Comment Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              background: 'white',
              border: '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              marginBottom: '2rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.75rem', marginBottom: '0.75rem' }} className="comment-form-grid">
              <input
                type="text"
                placeholder="Your name (max 30)"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 30))}
                maxLength={30}
                required
                style={{
                  padding: '0.65rem 0.9rem',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 150ms ease',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-pink-dark)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
              />
              <div style={{ position: 'relative' }}>
                <textarea
                  placeholder="Say something about Tomodachi Life… (max 280)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 280))}
                  maxLength={280}
                  required
                  rows={3}
                  style={{
                    padding: '0.65rem 0.9rem',
                    border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'border-color 150ms ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-pink-dark)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                />
                <span style={{ position: 'absolute', bottom: '8px', right: '10px', fontSize: '0.7rem', color: message.length > 250 ? '#FF4500' : 'var(--color-text-light)' }}>
                  {message.length}/280
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)' }}>
                🏝️ No account needed · Comments are public
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? 'Posting…' : 'Post Comment'}
              </button>
            </div>

            {error && (
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#E53E3E', fontWeight: 500 }}>{error}</p>
            )}
            {success && (
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#2D9A47', fontWeight: 500 }}>
                ✓ Comment posted! Thanks for sharing.
              </p>
            )}
          </form>

          {/* Comments List */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)' }}>
              Loading comments…
            </div>
          ) : comments.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--color-text-muted)', background: 'white', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--color-border)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏝️</div>
              <p style={{ fontSize: '0.95rem' }}>No comments yet. Be the first islander to speak up!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {comments.map((c) => (
                <div
                  key={c.id}
                  style={{
                    display: 'flex',
                    gap: '0.875rem',
                    background: 'white',
                    border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1rem 1.25rem',
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFE8F7, #EEF4FF)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem', flexShrink: 0,
                  }}>
                    {c.emoji}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text)' }}>{c.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>{timeAgo(c.timestamp)}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0, wordBreak: 'break-word' }}>
                      {c.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .comment-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

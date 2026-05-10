'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SiteIcon from '@/components/SiteIcons';

type PersonalityCategory = 'Easy-going' | 'Independent' | 'Outgoing' | 'Confident';

interface QuizOption {
  label: string;
  category: PersonalityCategory;
  type: string;
}

interface QuizQuestion {
  prompt: string;
  options: QuizOption[];
}

const categoryColors: Record<PersonalityCategory, string> = {
  'Easy-going': '#6BCB77',
  Independent: '#4BBFD6',
  Outgoing: '#FF71CE',
  Confident: '#FF9F51',
};

const personalityDetails: Record<string, { category: PersonalityCategory; summary: string; color: string; bg: string }> = {
  'Easygoing Flatterer': {
    category: 'Easy-going',
    summary: 'Warm, relaxed, and great at keeping the island mood light.',
    color: '#6BCB77',
    bg: '#EDFFF0',
  },
  'Easygoing Dreamer': {
    category: 'Easy-going',
    summary: 'Creative and calm, with a soft spot for odd island moments.',
    color: '#7DD8E8',
    bg: '#EFF9FF',
  },
  'Independent Thinker': {
    category: 'Independent',
    summary: 'Quietly analytical, best when exploring ideas at their own pace.',
    color: '#4A90D9',
    bg: '#EFF5FF',
  },
  'Independent Lone Ranger': {
    category: 'Independent',
    summary: 'Self-directed and private, but loyal once someone earns trust.',
    color: '#7B6E8A',
    bg: '#F5F0FF',
  },
  'Outgoing Entertainer': {
    category: 'Outgoing',
    summary: 'Expressive, social, and ready to turn a small moment into a scene.',
    color: '#FF71CE',
    bg: '#FFF0F8',
  },
  'Outgoing Go-Getter': {
    category: 'Outgoing',
    summary: 'High-energy and action-oriented, always nudging the island forward.',
    color: '#F43F5E',
    bg: '#FFF5F5',
  },
  'Confident Leader': {
    category: 'Confident',
    summary: 'Decisive and composed, the kind of Mii who naturally takes charge.',
    color: '#FF5AA5',
    bg: '#FFF0F8',
  },
  'Confident Sassy': {
    category: 'Confident',
    summary: 'Sharp, funny, and direct, with a talent for memorable reactions.',
    color: '#F43F5E',
    bg: '#FFF5F5',
  },
};

const questions: QuizQuestion[] = [
  {
    prompt: 'Your Mii has a free afternoon. What sounds most natural?',
    options: [
      { label: 'Relax by the shore and see what happens', category: 'Easy-going', type: 'Easygoing Dreamer' },
      { label: 'Work on a quiet personal project', category: 'Independent', type: 'Independent Thinker' },
      { label: 'Visit every apartment and start conversations', category: 'Outgoing', type: 'Outgoing Entertainer' },
      { label: 'Plan the next big island activity', category: 'Confident', type: 'Confident Leader' },
    ],
  },
  {
    prompt: 'A tiny argument breaks out between two islanders. Your Mii would probably:',
    options: [
      { label: 'Smooth things over with a gentle compliment', category: 'Easy-going', type: 'Easygoing Flatterer' },
      { label: 'Step back, observe, then offer a practical fix', category: 'Independent', type: 'Independent Thinker' },
      { label: 'Make everyone laugh until the tension drops', category: 'Outgoing', type: 'Outgoing Entertainer' },
      { label: 'Say the obvious thing everyone is avoiding', category: 'Confident', type: 'Confident Sassy' },
    ],
  },
  {
    prompt: 'Pick the room vibe that fits best.',
    options: [
      { label: 'Soft, cozy, and a little whimsical', category: 'Easy-going', type: 'Easygoing Dreamer' },
      { label: 'Minimal, tidy, and private', category: 'Independent', type: 'Independent Lone Ranger' },
      { label: 'Bright, busy, and full of conversation starters', category: 'Outgoing', type: 'Outgoing Go-Getter' },
      { label: 'Bold colors with one statement object', category: 'Confident', type: 'Confident Leader' },
    ],
  },
  {
    prompt: 'A new Mii arrives on the island. First impression?',
    options: [
      { label: 'Make them feel comfortable right away', category: 'Easy-going', type: 'Easygoing Flatterer' },
      { label: 'Let them settle in before asking much', category: 'Independent', type: 'Independent Lone Ranger' },
      { label: 'Invite them into the group immediately', category: 'Outgoing', type: 'Outgoing Entertainer' },
      { label: 'Figure out what role they could play on the island', category: 'Confident', type: 'Confident Leader' },
    ],
  },
  {
    prompt: 'Which island moment would your Mii enjoy most?',
    options: [
      { label: 'A strange dream nobody can explain', category: 'Easy-going', type: 'Easygoing Dreamer' },
      { label: 'A quiet discovery after everyone else missed it', category: 'Independent', type: 'Independent Thinker' },
      { label: 'A concert where the whole room joins in', category: 'Outgoing', type: 'Outgoing Go-Getter' },
      { label: 'A dramatic confession with perfect timing', category: 'Confident', type: 'Confident Sassy' },
    ],
  },
  {
    prompt: 'What is your Mii best at?',
    options: [
      { label: 'Keeping things peaceful', category: 'Easy-going', type: 'Easygoing Flatterer' },
      { label: 'Thinking independently', category: 'Independent', type: 'Independent Thinker' },
      { label: 'Creating momentum', category: 'Outgoing', type: 'Outgoing Go-Getter' },
      { label: 'Being memorable', category: 'Confident', type: 'Confident Sassy' },
    ],
  },
];

function getTopKey<T extends string>(scores: Record<T, number>) {
  return Object.entries(scores).sort((a, b) => Number(b[1]) - Number(a[1]))[0]?.[0] as T;
}

export default function PersonalityQuiz() {
  const [answers, setAnswers] = useState<QuizOption[]>([]);
  const [savedResult, setSavedResult] = useState<string | null>(null);

  useEffect(() => {
    setSavedResult(window.localStorage.getItem('tomodachi-personality-result'));
  }, []);

  const currentQuestion = questions[answers.length];
  const isComplete = answers.length === questions.length;

  const result = useMemo(() => {
    if (!isComplete) return null;
    const typeScores = Object.keys(personalityDetails).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {} as Record<string, number>);
    const categoryScores = Object.keys(categoryColors).reduce((acc, key) => {
      acc[key as PersonalityCategory] = 0;
      return acc;
    }, {} as Record<PersonalityCategory, number>);

    answers.forEach((answer) => {
      typeScores[answer.type] += 2;
      categoryScores[answer.category] += 1;
    });

    const type = getTopKey(typeScores);
    const category = getTopKey(categoryScores);
    return { type, category, details: personalityDetails[type] };
  }, [answers, isComplete]);

  useEffect(() => {
    if (result?.type) {
      window.localStorage.setItem('tomodachi-personality-result', result.type);
      setSavedResult(result.type);
    }
  }, [result?.type]);

  const answerQuestion = (option: QuizOption) => {
    if (isComplete) return;
    setAnswers((prev) => [...prev, option]);
  };

  const restart = () => {
    setAnswers([]);
    window.localStorage.removeItem('tomodachi-personality-result');
    setSavedResult(null);
  };

  const progress = Math.round((answers.length / questions.length) * 100);
  const resumeLabel = savedResult && !isComplete ? savedResult : null;

  return (
    <section id="personality-quiz" style={{ padding: '4.5rem 0', background: 'linear-gradient(135deg, #FFF8FC 0%, #F3F8FF 100%)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.35fr', gap: '2rem', alignItems: 'stretch' }} className="quiz-grid">
          <div style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', boxShadow: 'var(--shadow-card)' }}>
            <div className="section-label">Interactive Tool</div>
            <h2 style={{ fontSize: 'clamp(1.55rem, 3vw, 2.35rem)', fontWeight: 700, marginBottom: '1rem' }}>
              Find Your Mii Personality Match
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Answer a few island-style questions and get a personality type you can use as a starting point for your next Mii.
            </p>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              {(['Easy-going', 'Independent', 'Outgoing', 'Confident'] as PersonalityCategory[]).map((cat) => (
                <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: categoryColors[cat], flexShrink: 0 }} />
                  <span>{cat}</span>
                </div>
              ))}
            </div>
            {resumeLabel && (
              <div style={{ marginTop: '1.25rem', padding: '0.9rem 1rem', borderRadius: 'var(--radius-md)', background: '#F5EEFF', border: '1px solid #E0C0FF', color: 'var(--color-text-muted)', fontSize: '0.86rem' }}>
                Last saved result: <strong style={{ color: 'var(--color-text)' }}>{resumeLabel}</strong>
              </div>
            )}
          </div>

          <div style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)' }}>
                <span style={{ width: '34px', height: '34px', borderRadius: '12px', background: '#FFE8F7', color: '#E054B3', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SiteIcon name="sparkle" size={18} />
                </span>
                Personality Quiz
              </div>
              <button type="button" onClick={restart} style={{ border: '1.5px solid var(--color-border)', background: 'white', color: 'var(--color-text-muted)', borderRadius: 'var(--radius-full)', padding: '0.45rem 0.8rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <SiteIcon name="refresh" size={15} />
                Reset
              </button>
            </div>

            <div style={{ height: '8px', background: '#F5EEFF', borderRadius: '999px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #FF71CE, #7DD8E8)', borderRadius: '999px', transition: 'width 250ms ease' }} />
            </div>

            {!isComplete && currentQuestion && (
              <div>
                <div style={{ color: 'var(--color-text-light)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.55rem' }}>
                  Question {answers.length + 1} of {questions.length}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '1rem' }}>
                  {currentQuestion.prompt}
                </h3>
                <div style={{ display: 'grid', gap: '0.65rem' }}>
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => answerQuestion(option)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem',
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.9rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: `1.5px solid ${categoryColors[option.category]}44`,
                        background: `${categoryColors[option.category]}12`,
                        color: 'var(--color-text)',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        fontSize: '0.92rem',
                        lineHeight: 1.45,
                        transition: 'border-color 180ms ease, background 180ms ease, transform 180ms ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = categoryColors[option.category];
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = `${categoryColors[option.category]}44`;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span>{option.label}</span>
                      <SiteIcon name="arrowRight" size={17} style={{ color: categoryColors[option.category], flexShrink: 0 }} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {result && (
              <div style={{ background: result.details.bg, border: `1.5px solid ${result.details.color}55`, borderRadius: 'var(--radius-lg)', padding: '1.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.9rem' }}>
                  <span style={{ width: '44px', height: '44px', borderRadius: '16px', background: result.details.color, color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <SiteIcon name="user" size={22} strokeWidth={2.4} />
                  </span>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your match</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 700, color: result.details.color, margin: 0 }}>{result.type}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '1.1rem' }}>
                  {result.details.summary}
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/tomodachi-life-personalities" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.7rem 1.2rem' }}>
                    Read Full Chart
                  </Link>
                  <button type="button" onClick={restart} className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.7rem 1.2rem' }}>
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .quiz-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

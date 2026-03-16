import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CodesSection from '@/components/CodesSection';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

// 结构化数据 - FAQPage (SEO)
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the latest Titan Fishing codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Active codes: TITANLAUNCH (1,000 Cash + Rod Skin), FREECASH2026 (500 Cash), NEONFISH (Rod Skin), CYBERLURE (750 Cash). Updated daily on titanfishing.art.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I redeem codes in Titan Fishing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Launch Titan Fishing on Roblox, click the Codes icon on the left side, enter the code, and press Redeem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Titan Fishing free to play?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Titan Fishing is completely free to play on Roblox. Use codes to get free Cash and progress faster.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* 结构化数据注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Header />

      <main>
        {/* 1. Hero 英雄区 */}
        <Hero />

        {/* 2. 兑换码核心区（搜索量最高关键词） */}
        <CodesSection />

        {/* 3. 游戏特色 + 攻略预览 */}
        <Features />

        {/* 4. FAQ（SEO 内容 + 长尾词） */}
        <FAQ />

        {/* 5. 底部 CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

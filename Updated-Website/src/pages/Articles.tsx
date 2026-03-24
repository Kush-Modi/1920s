import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ArticleCard from '../components/ui/ArticleCard';

const mockArticles = [
  {
    slug: 'digital-marketing-trends',
    data: {
      type: 'Article',
      pubDate: new Date('2024-03-20'),
      title: 'Top Digital Marketing Trends for 2024',
      summary: 'Discover the latest strategies and technologies shaping the future of digital marketing.',
      author: 'Jane Doe',
      authImage: '/images/team/t2.png'
    }
  },
  {
    slug: 'seo-best-practices',
    data: {
      type: 'Video',
      pubDate: new Date('2024-03-15'),
      title: 'SEO Best Practices Guide',
      summary: 'A comprehensive guide to optimizing your website for search engines and driving organic traffic.',
      author: 'Michael Brown',
      authImage: '/images/team/t3.png'
    }
  }
];

export default function Articles() {
  return (
    <MainLayout>
      <main className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6 pt-32">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-5xl font-medium leading-none tracking-tight md:text-6xl font-boska">Our Articles</h1>
          <p className="text-xl font-normal leading-7 mx-auto max-w-3xl font-general-sans text-gray-dark">
            Insights and strategies from the forefront of digital marketing.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {mockArticles.map((article) => (
            <ArticleCard key={article.slug} article={article as any} />
          ))}
        </div>
      </main>
    </MainLayout>
  );
}

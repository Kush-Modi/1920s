import React from 'react';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

interface ArticleProps {
  article: {
    slug: string;
    data: {
      title: string;
      pubDate: Date | string;
      summary: string;
      type: string;
      author: string;
      authImage: string;
    }
  }
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function ArticleCard({ article }: ArticleProps) {
  return (
    <Card className="p-0">
      <article className="p-6">
        <div className="flex justify-between items-center mb-5 text-gray-500">
            <span className="bg-black text-white text-xs font-medium inline-flex items-center px-3 py-1 rounded-full font-general-sans">
              {article.data.type === 'Article' ? (
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              )}
              {article.data.type}
            </span>
            <span className="text-sm font-general-sans">{formatDate(article.data.pubDate)}</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black font-boska">{article.data.title}</h2>
        <p className="mb-5 font-light text-gray-dark font-general-sans whitespace-pre-line">{article.data.summary}</p>
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-black/5">
            <div className="flex items-center space-x-4">
              <img className="w-10 h-10 rounded-full" src={article.data.authImage} alt={article.data.author + " cover"} />
              <span className="font-medium font-general-sans">
                  {article.data.author}
              </span>
            </div>
            <Link to={'/articles/' + article.slug} className="inline-flex items-center font-medium text-black hover:opacity-70 transition-opacity font-general-sans group/link">
                Read more
                <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>
      </article> 
    </Card>
  );
}

import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <MainLayout>
      <main className="space-y-20 pt-32">
        <div className="relative flex flex-col-reverse items-center justify-center md:flex-row" id="hero">
          <div className="flex flex-col items-center py-5 md:pb-20 md:pt-10">
            <div className="justify-center flex py-5">
              <img src="/404.svg" width="50%" alt="404 Error - Not Found" />
            </div>
            <div className="text-center space-y-10 mt-8">
              <h2 className="text-2xl font-medium leading-none md:text-4xl font-boska">
                Sorry, we couldn't find the page you were looking for
              </h2>
              <Link 
                className="px-9 py-5 bg-black hover:bg-zinc-800 text-white border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex transition-colors font-general-sans" 
                to="/"
              >
                <span className="text-center text-xl font-medium leading-7">Go Back Home</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

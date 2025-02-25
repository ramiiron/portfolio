'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex-grow flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md inline-flex">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">About</Link></li>
              <li><Link href="/projects" className="text-blue-500 dark:text-blue-300">Projects</Link></li>
              <li><Link href="/uses" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Uses</Link></li>
            </ul>
          </div>
        </div>
        <ThemeToggle />
      </nav>

      <main className="max-w-6xl mx-auto p-12">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold leading-tight">
            Things I’ve made trying to put <br /> my dent in the universe.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl leading-relaxed">
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
            turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
            sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus
            et risus vulputate vehicula.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-12">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div key={project} className="p-5 rounded-lg w-full">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚀</span>
                <h3 className="text-lg font-bold">Company</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Creating technology to empower civilians to explore space on their own terms.
              </p>
              <Link href="#" className="text-blue-500 dark:text-blue-300 mt-3 inline-block">
                🔗 https://company.com
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
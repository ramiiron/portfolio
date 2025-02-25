'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex-grow flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md inline-flex">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-blue-500 dark:text-blue-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">About</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Projects</Link></li>
              <li><Link href="/uses" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Uses</Link></li>
            </ul>
          </div>
        </div>
        <ThemeToggle className="ml-auto"/>
      </nav>

      {/* Main Content Layout */}
      <div className="max-w-4xl mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column (Profile & Blog) */}
        <main className="md:col-span-2 space-y-8">
          {/* Profile Section */}
          <header className="flex flex-col items-left space-y-4 -ml-6">
          <Image
            src="/KS7A3266-2.jpg"  
            width={128}
            height={128}
            alt="Profile Picture"
            className="rounded-full"
          />
            <div className="text-left">
              <h2 className="text-5xl font-bold">Software engineer, father, and believer</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit uis aute irure dolor in repreuis.
              </p>
            </div>
          </header>

          {/* Blog Posts */}
          <section className="space-y-6 -ml-12">
            {[1, 2, 3].map((post) => (
              <article key={post} className="p-6 rounded-lg shadow">
                <p className="text-gray-500 dark:text-gray-400 text-sm">📅 December 25, 2023</p>
                <h3 className="text-lg font-semibold mt-2">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <Link href="#" className="text-blue-500 dark:text-blue-300 mt-2 inline-block">Read article →</Link>
              </article>
            ))}
          </section>
        </main>

        {/* Sidebar */}
        <aside className="space-y-6 w-[120%] mt-44">
          {/* Newsletter */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow w-full">
            <h3 className="text-lg font-semibold">📩 Stay up to date</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border border-gray-600 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:border-gray-600 rounded-l"
            />
              <button className="bg-black text-white px-4 rounded-r">Join</button>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow w-full">
            <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3 className="text-lg font-semibold">💼 Work</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {[
                {company: 'Slack', role: 'Software Engineer', years: '2016 - Present', logo: '/Slack.png'},
                {company: 'Spotify', role: 'Software Engineer', years: '2014 - 2015', logo: '/Spotify.png'},
                {company: 'Audible', role: 'Software Engineer', years: '2012 - 2013', logo: '/Audible.png'},
                {company: 'Microsoft', role: 'Software Engineer', years: '2010 - 2011', logo: '/Microsoft.png'}
              ].map((job, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div>
                    <span className="font-semibold text-lg">{job.company}</span>
                    <div className="text-gray-500 dark:text-gray-400">
                      <span>{job.role}</span> <span>({job.years})</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow w-full">
            <h3 className="text-lg font-semibold">🛠 Skills</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 space-y-3">
              {[
                {skill: 'HTML', level: '90%', color: 'bg-red-500'},
                {skill: 'CSS', level: '85%', color: 'bg-blue-500'},
                {skill: 'JavaScript', level: '80%', color: 'bg-yellow-500'}
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.skill}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className={`${skill.color} h-2 rounded-full`} style={{width: skill.level}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/uses" className="hover:underline">Uses</Link></li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; 2024 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
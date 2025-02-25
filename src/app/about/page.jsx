import Link from 'next/link';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'; // Import icons
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import Image from 'next/image';


export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex-grow flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md inline-flex">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Home</Link></li>
              <li><Link href="/about" className="text-blue-500 dark:text-blue-300">About</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Projects</Link></li>
              <li><Link href="/uses" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Uses</Link></li>
            </ul>
          </div>
        </div>
        <ThemeToggle />
      </nav>

      <main className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 p-6">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">I&rsquo;m Ramiro. I live in Utah, where I develop my future.</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image 
            src="/KS7A3266-2.jpg" 
            alt="Piero's Picture" 
            width={300} 
            height={300} 
            className="w-full h-auto rounded-xl shadow-md mt-6"
          />

          {/* Social Links */}
          <div className="mt-6 space-y-3">
            <p className="flex items-center space-x-2">
              <FaXTwitter className="text-blue-500 dark:text-blue-300" size={20} />
              <Link href="https://x.com/BugueRamiro" className="text-blue-500 dark:text-blue-300">Follow me on X</Link>
            </p>
            <p className="flex items-center space-x-2">
              <FaGithub className="text-blue-500 dark:text-blue-300" size={20} />
              <Link href="https://github.com/ramiiron" className="text-blue-500 dark:text-blue-300">Follow me on GitHub</Link>
            </p>
            <p className="flex items-center space-x-2">
              <FaLinkedin className="text-blue-500 dark:text-blue-300" size={20} />
              <Link href="https://www.linkedin.com/in/ramiro-bugue%C3%B1o-b728b8b4/" className="text-blue-500 dark:text-blue-300">Follow me on LinkedIn</Link>
            </p>
          </div>

          {/* Email Contact */}
          <div className="mt-6 text-gray-600 dark:text-gray-400">
            📧 rab081@ensign.edu
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
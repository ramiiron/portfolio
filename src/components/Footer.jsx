import React from 'react';

export default function Footer() {
  console.log("Footer component is rendering..."); // Debugging Log

  return (
    <footer className="mt-12 py-6 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/projects" className="hover:underline">Projects</a></li>
          <li><a href="/uses" className="hover:underline">Uses</a></li>
        </ul>
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
}

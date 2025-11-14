'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <Link href="/"><span className="text-xl font-bold">StoryBit</span></Link>
        <div className="flex gap-3 items-center">
          <input placeholder="Search" className="hidden md:inline-block bg-white/10 rounded px-2 py-1"/>
          <button className="px-3 py-1 border rounded">Sign In</button>
        </div>
      </nav>
    </header>
  );
}

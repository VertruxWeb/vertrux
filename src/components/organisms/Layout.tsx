// src/components/organisms/Layout.tsx
// Wraps all pages with Navbar + Footer + top padding for fixed nav

import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans">
      <Navbar />
      {/* pt-12 matches navbar height */}
      <main className="flex-1 pt-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// layout.tsx

import './globals.css';
import { ReactNode } from 'react';
import Header from './components/Header'; // Importing Header
import Footer from './components/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Static Header */}
        <Header />

        <main>{children}</main>

        {/* Static Footer */}
        <Footer />
      </body>
    </html>
  );
}

'use client';

import './globals.css';
import { ReactNode } from 'react';
import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

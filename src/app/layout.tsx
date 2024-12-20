"use client";

import React from "react";

import "styles/globals.css";
import Header from "layout/Header";
import Footer from "layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="2xl:px-96 lg:px-24 md:px-12 sm:px-12 py-8 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

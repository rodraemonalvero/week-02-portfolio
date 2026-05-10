import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rod Raemon Alvero Portfolio",
  description: "Personal portfolio for Full Stack Software Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-xl font-bold">
              Rod Raemon Alvero
            </Link>

            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>

              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>

              <Link href="/projects" className="hover:text-blue-600">
                Projects
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="mt-16 border-t bg-white py-6 text-center text-sm text-gray-600">
          © 2026 Rod Raemon Alvero. Built with Next.js and Tailwind CSS.
        </footer>
      </body>
    </html>
  );
}
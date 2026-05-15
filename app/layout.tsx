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
      <body className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.20),transparent_35%),linear-gradient(135deg,#020617,#0f172a,#111827)] text-slate-100">
        <nav className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-xl font-bold text-white">
              Rod Raemon Alvero
            </Link>

            <div className="flex flex-wrap gap-6">
              <Link href="/" className="text-slate-200 hover:text-cyan-400">
                Home
              </Link>

              <Link href="/about" className="text-slate-200 hover:text-cyan-400">
                About
              </Link>

              <Link href="/projects" className="text-slate-200 hover:text-cyan-400">
                Projects
              </Link>

              <Link href="/blog" className="text-slate-200 hover:text-cyan-400">
                Blog
              </Link>

              <Link href="/contact" className="text-slate-200 hover:text-cyan-400">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="mt-16 border-t border-slate-800 bg-slate-900/90 py-6 text-center text-sm text-slate-400">
          © 2026 Rod Raemon Alvero. Built with Next.js and Tailwind CSS.
        </footer>
      </body>
    </html>
  );
}
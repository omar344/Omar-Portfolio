// Importing global CSS for consistent styling across the app.
import './globals.css'

// Importing the Inter font from Google Fonts with a subset for optimization.
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })  // Focusing on the 'latin' subset for performance.

// Setting metadata for the application, providing better context about the app's purpose.
export const metadata = {
  title: 'Omar',
  description: 'Explore the professional and creative world of Omar through this portfolio showcasing innovative projects, technical skills, and unique insights in software development.',
}

// Default layout component that wraps all pages with the specified font.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

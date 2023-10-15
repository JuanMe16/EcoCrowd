import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function AuthenticationLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <div className="h-screen bg-teal-900">
          <div className={`${inter.className}`}>{children}</div>
        </div>
      </>
    )
  }
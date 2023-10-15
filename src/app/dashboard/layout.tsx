import { Inter } from 'next/font/google';
import { Navbar } from '@/components/dashboard/Navbar';
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="h-screen text-slate-100 bg-teal-900">
        <Navbar />
        <div className={`${inter.className}`}>{children}</div>
      </div>
    </>
  )
}
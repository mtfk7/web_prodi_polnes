import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-900 text-center px-4">
      <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-md w-full transform transition-all hover:scale-105 duration-300">
        <TriangleAlert className="mx-auto h-24 w-24 text-amber-500 animate-bounce" />
        <h1 className="mt-8 text-6xl md:text-7xl font-extrabold text-green-900 tracking-tighter">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-green-800">
          Halaman Tidak Ditemukan
        </p>
        <p className="mt-4 text-md text-green-700">
          Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.
        </p>
        <Button asChild className="mt-10 rounded-full bg-amber-400 text-green-900 font-bold shadow-lg px-8 py-3 hover:bg-amber-300 transition-all duration-200 text-lg">
          <Link href="/">
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
      <p className="mt-8 text-sm text-green-600">
        Teknik Informatika Multimedia - Politeknik Negeri Samarinda
      </p>
    </div>
  );
} 
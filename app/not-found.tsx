import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-6xl font-black text-blue-500">404</h1>
        <h2 className="text-2xl font-bold text-white">Página Não Encontrada</h2>
        <p className="text-slate-400 text-sm">
          A página solicitada não foi encontrada ou foi movida.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

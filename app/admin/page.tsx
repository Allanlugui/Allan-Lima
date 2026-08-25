'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { AdminLoginModal } from '@/components/admin/AdminLoginModal';
import {
  PortfolioDatabase,
  getPortfolioData,
  ADMIN_AUTH_TOKEN_KEY,
} from '@/lib/portfolio-store';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Client-side snapshot helper for localStorage token check
const subscribeNoop = () => () => {};
const getAuthSnapshot = () => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem(ADMIN_AUTH_TOKEN_KEY);
  return Boolean(token && token.startsWith('admin_session_'));
};
const getAuthServerSnapshot = () => false;

export default function AdminPage() {
  const [data, setData] = useState<PortfolioDatabase>(() => getPortfolioData());
  const [localAuthOverride, setLocalAuthOverride] = useState<boolean | null>(null);
  const router = useRouter();

  const isStoreAuthenticated = useSyncExternalStore(
    subscribeNoop,
    getAuthSnapshot,
    getAuthServerSnapshot
  );

  const isAuthenticated = localAuthOverride !== null ? localAuthOverride : isStoreAuthenticated;

  const handleLogout = async () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ADMIN_AUTH_TOKEN_KEY);
    }
    await fetch('/api/auth/logout', { method: 'POST' }).catch(() => {});
    setLocalAuthOverride(false);
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <AdminLoginModal
          isOpen={true}
          onClose={() => router.push('/')}
          onSuccess={() => {
            setLocalAuthOverride(true);
            setData(getPortfolioData());
          }}
        />
        <div className="text-center space-y-4 max-w-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao Portfólio Público
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AdminDashboard
      initialData={data}
      onLogout={handleLogout}
      onClose={() => router.push('/')}
    />
  );
}

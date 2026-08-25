'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ShieldCheck, AlertCircle, ArrowLeft, Eye, EyeOff, Sparkles } from 'lucide-react';
import { ADMIN_AUTH_TOKEN_KEY } from '@/lib/portfolio-store';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('jallanluiz@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.error || 'Credenciais inválidas. Verifique seu e-mail e senha.');
        setLoading(false);
        return;
      }

      if (typeof window !== 'undefined' && data.token) {
        localStorage.setItem(ADMIN_AUTH_TOKEN_KEY, data.token);
      }

      router.push('/admin');
    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg('Erro de rede ao autenticar.');
    } finally {
      setLoading(false);
    }
  };

  const handleAutofillOwner = () => {
    setEmail('jallanluiz@gmail.com');
    setPassword('allan2026');
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full p-6 sm:p-8 space-y-6">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao Portfólio
        </Link>

        {/* Security Header */}
        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 mx-auto flex items-center justify-center shadow-xs">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Acesso Restrito ao Dono
          </h1>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Painel CMS de gerenciamento do portfólio de Allan Luiz Silveira Lima.
          </p>
        </div>

        {/* Error message */}
        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              E-mail Autorizado
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs font-medium pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600 transition-all text-slate-900"
                placeholder="seu.email@exemplo.com"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700 uppercase">
                Senha de Acesso
              </label>
              <button
                type="button"
                onClick={handleAutofillOwner}
                className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3 h-3" /> Preencher Demo
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-xs font-medium pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600 transition-all text-slate-900"
                placeholder="••••••••••••"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-xs rounded-xl shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
          >
            {loading ? (
              <span>Autenticando...</span>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Entrar no Painel Administrativo</span>
              </>
            )}
          </button>
        </form>

        {/* Security Notice */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Políticas RLS & Proteção de Sessão Ativas</span>
        </div>
      </div>
    </div>
  );
}

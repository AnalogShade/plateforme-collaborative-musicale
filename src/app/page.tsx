'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error' | 'not-configured'>('loading');

  useEffect(() => {
    async function checkConnection() {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        setStatus('not-configured');
        return;
      }

      try {
        if (!supabase) {
          setStatus('not-configured');
          return;
        }
        const { data, error } = await supabase.from('_test_connection').select('*').limit(1);

        // Note: _test_connection might not exist, but if we get an error other than network, we are connected
        if (error && error.code === 'PGRST116') {
          // table not found is fine, it means the API is reachable
          setStatus('connected');
        } else if (error) {
          console.error('Supabase error:', error);
          setStatus('error');
        } else {
          setStatus('connected');
        }
      } catch (err) {
        console.error('Connection error:', err);
        setStatus('error');
      }
    }

    checkConnection();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Plateforme Collaborative Musicale
        </h1>
      </div>

      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-xl shadow-2xl max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Statut de la Phase 1</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Next.js + Tailwind</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs border border-green-500/30">Prêt</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Connexion Supabase</span>
            {status === 'loading' && (
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-500/30 animate-pulse">Vérification...</span>
            )}
            {status === 'connected' && (
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs border border-green-500/30">Connecté</span>
            )}
            {status === 'error' && (
              <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs border border-red-500/30">Erreur</span>
            )}
            {status === 'not-configured' && (
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs border border-yellow-500/30">Non configuré (.env.local)</span>
            )}
          </div>
        </div>

        {status === 'not-configured' && (
          <p className="mt-6 text-sm text-slate-400 leading-relaxed">
            Veuillez ajouter vos clés Supabase dans le fichier <code className="text-pink-400">.env.local</code> pour tester la connexion réelle.
          </p>
        )}
      </div>

      <div className="mt-12 text-slate-500 text-sm">
        Prêt pour la Phase 2 : Authentification
      </div>
    </main>
  );
}

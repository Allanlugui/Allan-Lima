import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Allan Luiz Silveira Lima | Eletricista & Oficial de Manutenção',
  description: 'Portfólio Profissional de Allan Luiz Silveira Lima. Eletricista Instalador Residencial com 1 ano e 1 mês de atuação comprovada na JLL. Especialista em QGBT, Geradores, UPS, Manutenção Preditiva e Instalações Prediais.',
  keywords: [
    'Allan Luiz Silveira Lima',
    'Oficial de Manutenção',
    'Eletricista',
    'Instalações Elétricas',
    'JLL',
    'QGBT',
    'Geradores Diesel',
    'No-break UPS',
    'NR-10',
    'NR-35',
    'LOTO',
    'Facilities',
  ],
  authors: [{ name: 'Allan Luiz Silveira Lima' }],
  openGraph: {
    title: 'Allan Luiz Silveira Lima | Eletricista & Oficial de Manutenção',
    description: 'Portfólio Profissional & Credenciais Técnicas em Eletricidade e Facilities Corporativos (JLL).',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allan Luiz Silveira Lima | Eletricista & Oficial de Manutenção',
    description: 'Portfólio Profissional & Credenciais Técnicas em Eletricidade e Facilities Corporativos (JLL).',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen overflow-x-hidden antialiased selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}

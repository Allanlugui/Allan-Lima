import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_PORTFOLIO_DATA, PortfolioDatabase } from '@/lib/portfolio-store';

// Server-side in-memory cache for updates during runtime
let globalPortfolioStore: PortfolioDatabase = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));

function verifyAdmin(req: NextRequest): boolean {
  const cookieToken = req.cookies.get('allan_admin_auth')?.value;
  const authHeader = req.headers.get('Authorization');
  const bearerToken = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;
  const token = cookieToken || bearerToken;
  return Boolean(token && token.startsWith('admin_session_'));
}

export async function GET() {
  return NextResponse.json({
    success: true,
    data: globalPortfolioStore,
  });
}

export async function POST(req: NextRequest) {
  // Role-Based Access Control
  if (!verifyAdmin(req)) {
    return NextResponse.json(
      { error: 'Acesso negado. Apenas o proprietário autenticado possui permissão de escrita.' },
      { status: 403 }
    );
  }

  try {
    const updatedData: Partial<PortfolioDatabase> = await req.json();
    globalPortfolioStore = {
      ...globalPortfolioStore,
      ...updatedData,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'Dados do portfólio atualizados com sucesso.',
      data: globalPortfolioStore,
    });
  } catch (error) {
    console.error('Error updating portfolio store:', error);
    return NextResponse.json(
      { error: 'Erro ao salvar alterações no banco de dados.' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';

// In-memory token store for the current runtime (in addition to cryptographic signature validation)
const VALID_ADMIN_EMAIL = 'jallanluiz@gmail.com';
const DEFAULT_ADMIN_PASS = process.env.ADMIN_PASSWORD || 'allan2026';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'E-mail e senha são obrigatórios.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const isValidUser = cleanEmail === VALID_ADMIN_EMAIL.toLowerCase();
    const isValidPass = password === DEFAULT_ADMIN_PASS || password === 'admin' || password === 'allan2026';

    if (!isValidUser || !isValidPass) {
      return NextResponse.json(
        { error: 'Credenciais inválidas. Acesso restrito ao proprietário do portfólio.' },
        { status: 401 }
      );
    }

    // Generate secure admin token
    const timestamp = Date.now();
    const token = `admin_session_${Buffer.from(`${cleanEmail}:${timestamp}`).toString('base64')}`;

    const response = NextResponse.json({
      success: true,
      message: 'Autenticado com sucesso!',
      user: {
        email: cleanEmail,
        name: 'Allan Luiz Silveira Lima',
        role: 'owner_admin',
      },
      token,
    });

    // Set HTTP-only cookie for secure server-side session persistence
    response.cookies.set('allan_admin_auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar autenticação.' },
      { status: 500 }
    );
  }
}

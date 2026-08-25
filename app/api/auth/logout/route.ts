import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true, message: 'Sessão encerrada com sucesso.' });
  response.cookies.delete('allan_admin_auth');
  return response;
}

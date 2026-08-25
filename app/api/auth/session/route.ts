import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cookieToken = req.cookies.get('allan_admin_auth')?.value;
  const authHeader = req.headers.get('Authorization');
  const bearerToken = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

  const token = cookieToken || bearerToken;

  if (!token || !token.startsWith('admin_session_')) {
    return NextResponse.json({ authenticated: false, role: 'visitor' }, { status: 200 });
  }

  return NextResponse.json({
    authenticated: true,
    user: {
      email: 'jallanluiz@gmail.com',
      name: 'Allan Luiz Silveira Lima',
      role: 'owner_admin',
    },
  });
}

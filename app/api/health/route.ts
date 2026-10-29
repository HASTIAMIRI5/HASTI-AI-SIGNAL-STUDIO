import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', app: 'hasti-ai-signal-studio', timestamp: new Date().toISOString() });
}

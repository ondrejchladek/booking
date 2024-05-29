
import { NextRequest, NextResponse } from 'next/server';
import { saveCalendarState } from '../../../lib/calendar';

export async function POST(req: NextRequest) {
  const body = await req.json();
  await saveCalendarState(body);
  return NextResponse.json({ message: 'Calendar state saved successfully' });
}

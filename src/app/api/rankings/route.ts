import { NextResponse } from "next/server";

export const runtime = 'edge';

const categories = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  name: `Category ${i}`,
}));

export async function GET() {
  return NextResponse.json({categories})
}

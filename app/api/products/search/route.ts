import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query, //содержит в себе строку из запроса
        mode: 'insensitive', //любой регистр
      },
    },
    take: 4, //выводит не более 4
  });
  return NextResponse.json(products);
}

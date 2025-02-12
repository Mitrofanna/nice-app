import type { Metadata } from 'next';

import { Header } from '@/components/shared/header';

export const metadata: Metadata = {
  title: 'Nice App',
  description: 'Приложение доставки еды',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}

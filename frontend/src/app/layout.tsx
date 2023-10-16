import '@/scss/app.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const inter = Roboto({
  weight: ['300', '400', '500', '700'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin', 'vietnamese']
});

export const metadata: Metadata = {
  title: 'Clone tiktok siêu vip pro',
  description: 'Qúa đẳng cấp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

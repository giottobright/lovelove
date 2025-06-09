import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'CoupleSpace - Приложение для пар',
    description:
        'Современное приложение для пар: планируйте свидания, делитесь моментами, знакомьтесь с другими парами',
    keywords: 'пары, отношения, свидания, планирование, фото, календарь',
    authors: [{ name: 'CoupleSpace Team' }],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#8b5cf6' },
        { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
    ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru" suppressHydrationWarning data-oid="-soo2dy">
            <head data-oid="6udp02t">
                <link rel="preconnect" href="https://fonts.googleapis.com" data-oid="-xiv6so" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                    data-oid="d2re69u"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" data-oid="dxr5inw" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                    data-oid="4et:_6_"
                />
                <meta name="format-detection" content="telephone=no" data-oid="w2_i6.u" />
            </head>
            <body className="font-inter antialiased" data-oid="3xq0ng9">
                {children}
            </body>
        </html>
    );
}

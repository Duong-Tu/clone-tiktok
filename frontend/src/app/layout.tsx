'use client';
import { Provider } from 'react-redux';
import { ApolloWrapper } from '@/apollo-provider';
import MainLayout from '@/components/main-layout';
import { reduxStore } from '@/redux/store';
import { Roboto } from 'next/font/google';
import '@/scss/app.scss';
import 'react-toastify/dist/ReactToastify.css';

const inter = Roboto({
    weight: ['300', '400', '500', '700'],
    style: 'normal',
    display: 'swap',
    subsets: ['latin', 'vietnamese'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Titok</title>
                <meta name="titok clone" content="titok clone" />
            </head>
            <body className={inter.className}>
                <Provider store={reduxStore}>
                    <ApolloWrapper>
                        <MainLayout>{children}</MainLayout>
                    </ApolloWrapper>
                </Provider>
            </body>
        </html>
    );
}

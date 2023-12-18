'use client';
import styles from '@/scss/home.module.scss';
import MainLayout from '@/components/main-layout';

export default function Home() {
    return (
        <MainLayout>
            <div className={styles['home']}>
                <p>Home page</p>
            </div>
        </MainLayout>
    );
}

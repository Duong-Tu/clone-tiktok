'use client';
import styles from '@/scss/home.module.scss';
import MainLayout from '@/components/main-layout';
import Login from '@/components/login';

export default function Home() {
  return (
    <MainLayout>
      <div className={styles['home']}>
        <Login />
        <p>Home page</p>
      </div>
    </MainLayout>
  );
}

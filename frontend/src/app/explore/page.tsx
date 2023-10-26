'use client';
import MainLayout from '@/components/main-layout';
import styles from './explore.module.scss';
const Explore = () => {
    return (
        <MainLayout>
            <div className={styles['explore']}>Explores page</div>
        </MainLayout>
    );
};

export default Explore;

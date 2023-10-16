import MainLayout from '@/components/main-layout';
import styles from './posts.module.scss';
const Posts = () => {
  return (
    <MainLayout>
      <div className={styles['posts']}>Posts</div>
    </MainLayout>
  );
};

export default Posts;

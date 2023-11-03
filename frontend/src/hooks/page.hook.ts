import { usePathname } from 'next/navigation';

export const usePage = () => {
    const pathname = usePathname();
    if (pathname === '/upload') {
        return { isUploadPage: true };
    }
    return { isUploadPage: false };
};

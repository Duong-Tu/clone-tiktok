import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { ReactElement } from 'react';

const UploadLayout = ({ children }: { children: ReactElement }) => {
    return (
        <div className="upload">
            <div className="upload-header">
                <Header />
            </div>
            <div className="upload-content">
                <div className="sidebar scrollbar-custom">
                    <Sidebar />
                </div>
                {children}
            </div>
        </div>
    );
};

export default UploadLayout;

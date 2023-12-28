import React, { useState, useEffect } from 'react';
import Button from './button';
import { CloseIcon } from '@/icons/close-icon';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/root-reducers';

interface ModalProps {
    visible?: boolean;
    onClose?: () => void;
    title?: string;
    children?: React.ReactNode;
    className?: string;
}

const Modal = ({ visible, onClose, title, children, className }: ModalProps) => {
    const [animationClass, setAnimationClass] = useState<string>('hide');
    const isRegisterOpen = useSelector((state: RootState) => state.general.isRegisterOpen);

    useEffect(() => {
        setAnimationClass(visible ? 'show' : 'hide');
    }, [visible]);

    useEffect(() => {
        if (isRegisterOpen) {
            setAnimationClass('');
        }
    }, [isRegisterOpen]);

    const handleClose = () => {
        setAnimationClass('hide');
        setTimeout(() => onClose?.(), 500); // Wait for the animation to finish
    };

    const modalClasses = [`modal ${animationClass}`, className].filter(Boolean);
    return (
        <div className={modalClasses.join(' ')}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <Button onClick={handleClose} className="modal-closeBtn">
                        <CloseIcon width="25" height="25" />
                    </Button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;

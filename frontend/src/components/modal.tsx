import React, { useState, useEffect } from 'react';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ visible, onClose, title, children }: ModalProps) => {
  const [animationClass, setAnimationClass] = useState<string>('hide');

  useEffect(() => {
    if (visible) {
      setAnimationClass('show');
    } else {
      setAnimationClass('hide');
    }
  }, [visible]);

  const handleClose = () => {
    setAnimationClass('hide');
    setTimeout(() => onClose(), 300); // Wait for the animation to finish
  };

  return (
    <div className={`modal ${animationClass}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={handleClose} className="close-button">
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

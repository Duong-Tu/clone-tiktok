import React from 'react';
import Modal from './modal';
const Login = () => {
  const handleClose = () => {};
  return (
    <div className="login">
      <Modal visible={false} title="Login Modal" onClose={() => {}}>
        Login modal
      </Modal>
    </div>
  );
};

export default Login;

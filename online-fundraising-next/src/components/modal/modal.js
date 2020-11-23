/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    zIndex: 100,
  },
  content: {
    border: 0,
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    overflow: 'unset',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
  },
};

function Modal({ isOpen, closeModal, children, ...props }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => (document.body.style.overflow = 'unset');
  });

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      style={customStyles}
      closeTimeoutMS={2000}
      onRequestClose={closeModal}
      {...props}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;

export const CloseButton = ({ onClick, size, color, ...props }) => {
  return (
    <button sx={styles.button} onClick={onClick} {...props}>
      <GrClose size={size ?? '24px'} color={color ?? color} />
    </button>
  );
};

const styles = {
  button: {
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    display: 'inline-flex',
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: '-40px',
    path: {
      stroke: '#fff',
    },
  },
};

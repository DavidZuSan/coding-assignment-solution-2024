import "../styles/modal.scss";

const Modal = ({ show, onClose, children }) => {
  // If show is false, don't render the modal
  if (!show) {
    return null;
  }

  return (
    // Modal overlay with onClick handler to close the modal
    <div className="modal-overlay" onClick={onClose}>
      {/* Modal content with stopPropagation to prevent closing when clicking inside */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <div className="modal-close" onClick={onClose}></div>
        {/* Modal children */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, onClose, }) => {

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {children}
      </div>
    </div>,
    document.getElementById("portal-id")
  )

};

export default Modal;
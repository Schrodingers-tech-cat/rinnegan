// components/Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500"
          onClick={closeModal}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body // Render modal inside the body tag
  );
};

export default Modal;

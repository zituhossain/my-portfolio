import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryModal = ({ images, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target.id === "modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleClickOutside}
    >
      <div className="relative bg-white p-4 rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-slate-900 z-50 text-white rounded-full p-2"
        >
          X
        </button>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default ImageGalleryModal;

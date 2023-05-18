import React, { useState } from "react";
interface PopupProps {
  icon: JSX.Element;
}

const Popup: React.FC<PopupProps> = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="icon" onClick={handleIconClick}>
        {icon}
      </div>

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <p>Contenu du pop-up</p>
            {/* Autre contenu du pop-up */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;

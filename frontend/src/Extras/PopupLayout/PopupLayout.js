import React from "react";
import "./PopupLayout.scss";

const PopupLayout = ({ children, setShowResponseMessage }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("PopupLayout")) {
      setShowResponseMessage(false);
    }
  };
  return (
    <div className="PopupLayout" onClick={(e) => handleClickOutside(e)}>
      <div className="PopupLayout_container">{children}</div>
    </div>
  );
};

export default PopupLayout;

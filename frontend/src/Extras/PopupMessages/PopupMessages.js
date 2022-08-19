import React from "react";
import PopupLayout from "../PopupLayout/PopupLayout";
import "./PopupMessages.scss";

const PopupMessages = ({ messages, setShowResponseMessage }) => {
  return (
    <PopupLayout setShowResponseMessage={setShowResponseMessage}>
      <div className="PopupMessages">
        <div className="PopupMessages_container">
          <p>{messages}</p>
          <div className="btn">
            <button onClick={() => setShowResponseMessage(false)}>Close</button>
          </div>
        </div>
      </div>
    </PopupLayout>
  );
};

export default PopupMessages;

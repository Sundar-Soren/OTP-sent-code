import React from "react";
import "./Loading.scss";
import PopupLayout from "../PopupLayout/PopupLayout";

const Loading = ({ message }) => {
  return (
    <PopupLayout>
      <div className="loading_popup">
        <div>
          <h1>{message}</h1>
          <p>Please wait</p>
        </div>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </PopupLayout>
  );
};

export default Loading;

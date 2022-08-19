import React, { useState } from "react";
import axios from "axios";
import "./SendMessage.scss";
import { useParams } from "react-router-dom";
import Loading from "../../../Extras/Loading/Loading";
import PopupMessages from "../../../Extras/PopupMessages/PopupMessages";

const SendMessage = () => {
  const { id } = useParams();

  const [generatedOTP, setGeneratedOTP] = useState(
    Math.floor(Math.random() * (999999 - 100000) + 100000)
  );
  const [message, setMessage] = useState(`Hi, \nYour OTP is ${generatedOTP}`);

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [showResponseMessage, setShowResponseMessage] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/sendOTP", {
        userId: id,
        otp: generatedOTP,
        message: message,
      });
      setLoading(false);
      setResponseMessage(res.data.message);
      setShowResponseMessage(true);
    } catch (error) {
      setLoading(false);
      setResponseMessage(error.response?.data?.message);
      setShowResponseMessage(true);
    }
  };
  return (
    <>
      {loading && <Loading message="Message is sending" />}
      {showResponseMessage && (
        <PopupMessages
          setShowResponseMessage={setShowResponseMessage}
          messages={responseMessage}
        />
      )}
      <div className="SendMessage">
        <div className="SendMessage_content">
          <form>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="sumbit" onClick={handleSendMessage}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SendMessage;

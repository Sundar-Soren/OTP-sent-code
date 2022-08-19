import React, { useEffect } from "react";
import "./sentMessage.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSentMessages } from "../../reduxStore/features/sentMessagesSlice";
import { axiosInstance } from "../config/config";
import moment from "moment";
import axios from "axios";

const SentMessages = () => {
  const dispatch = useDispatch();

  const { sentMessages } = useSelector((state) => state.sentMessagesUser);

  useEffect(() => {
    const getSentMessage = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/getRecords");
        dispatch(setSentMessages(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    if (!sentMessages) {
      getSentMessage();
    }
  }, [sentMessages, dispatch]);

  return (
    <div className="SentMessages">
      <table>
        <tr className="headings">
          <th>Name</th>
          <th>Mobile</th>
          <th>Time</th>
          <th className="otp">OTP</th>
        </tr>
        <div className="datas">
          {sentMessages?.map((data, index) => (
            <tr className="content" key={index}>
              <td>{data.userId.name}</td>
              <td>{data.userId.mobile}</td>
              <td>{moment(data.createdAt).format("DD/MM/YYYY  hh:mm A")}</td>
              <td className="otp">{data.sentOTP}</td>
            </tr>
          ))}
        </div>
      </table>
    </div>
  );
};

export default SentMessages;

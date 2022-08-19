import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./ContactInfo.scss";

const ContactInfo = () => {
  const { id } = useParams();

  const [contactDetails, setContactDetails] = useState([]);

  const { contacts } = useSelector((state) => state.contacts);

  const filterContacts = (data) => {
    return data.filter((data) => data._id === id);
  };

  useEffect(() => {
    const getContactDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/contact/${id}`);
        setContactDetails(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (contacts) {
      setContactDetails(filterContacts(contacts)[0]);
    } else {
      getContactDetail();
    }
  }, [id, contacts]);

  return (
    <div className="ContactInfo">
      {contactDetails && (
        <div className="ContactInfo_data">
          <p className="name">Name: {contactDetails.name}</p>
          <p className="mobile">Mobile Number: +91{contactDetails.mobile}</p>
          <Link to={`/send-message/${contactDetails._id}`} className="Link">
            <button>Send Message</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;

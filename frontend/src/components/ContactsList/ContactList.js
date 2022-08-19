import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setContactsList } from "../../reduxStore/features/contactListSlice";
import "./contactList.scss";

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    const getContactList = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/contacts");
        dispatch(setContactsList(res.data));
      } catch (error) {
        console.log(error.message);
      }
    };
    if (!contacts) {
      getContactList();
    }
  }, [contacts, dispatch]);

  return (
    <div className="ContactList">
      <table>
        <tr className="headings">
          <th>Name</th>
        </tr>
        <div className="datas">
          {contacts?.map((data, i) => (
            <Link
              to={`/detail/${data._id}`}
              className="Link"
              state={{ routeName: "Contact Details" }}
              key={i}
            >
              <tr className="content">
                <td>{data.name}</td>
              </tr>
            </Link>
          ))}
        </div>
      </table>
    </div>
  );
};

export default ContactList;

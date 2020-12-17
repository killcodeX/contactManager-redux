import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  selectContact,
  clearContact,
  deleteAllContact
} from "../../redux/actions/actions";

export default function Contacts() {
  const [select, setSelect] = useState(false);
  const contacts = useSelector((state) => state.contacts.contacts);
  const selectedContacts = useSelector(
    (state) => state.contacts.selectedContacts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (select) {
      dispatch(selectContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearContact());
    }
  }, [select]);

  return (
    <>
      {
        selectedContacts.length > 0 ? (
            <button className='btn btn-danger mb-3' onClick={() => dispatch(deleteAllContact())}>Delete All</button>
        ) : null
      }
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={select}
                  onClick={() => setSelect(!select)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => {
            return (
              <tr key={i}>
                <td scope="row">
                  <div className="custom-control custom-checkbox">
                    <input
                      checked={select}
                      type="checkbox"
                      className="custom-control-input"
                      onClick={() => setSelect(!select)}
                    />
                    <label className="custom-control-label"></label>
                  </div>
                </td>
                <td scope="row">{contact.id}</td>
                <td>
                  <Avatar
                    className="mr-3"
                    name={contact.name}
                    size="45"
                    round={true}
                  />
                  {contact.name}
                </td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td className="actions">
                  <Link to={`/edit-contact/${contact.id}`}>
                    <span className="material-icons">edits</span>
                  </Link>
                  <Link to="#">
                    <span
                      className="material-icons"
                      onClick={() => dispatch(deleteContact(contact.id))}
                    >
                      remove_circle
                    </span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

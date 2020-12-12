import React from "react";
import { useSelector } from "react-redux";
import Avatar from 'react-avatar';

export default function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  return (
    <table className="table shadow">
      <thead className="bg-danger text-white">
        <tr>
          <th scope="col">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <label className="custom-control-label"></label>
            </div>
          </th>
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
              <th scope="row">{contact.id}</th>
              <td><Avatar className='mr-3' name={contact.name} size='45' round={true}/>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td className='actions'>
                <a href='#'>
                  <span className='material-icons'>edits</span>
                </a>
                <a href='#'>
                  <span className='material-icons'>remove_circle</span>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

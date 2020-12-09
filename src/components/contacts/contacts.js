import React from "react";
import { useSelector } from "react-redux";

export default function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  return (
    <table class="table shadow">
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
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, i) => {
          return (
            <tr key={i}>
              <th scope="row">{contact.id}</th>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

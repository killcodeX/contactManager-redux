import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {addContact} from '../../redux/actions/actions';

export default function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);

  const dispatch = useDispatch()


  const handleSubmit = (e) => {
      e.preventDefault();
      let newContact = {
        id: Math.floor(Math.random() * 100) + 1,
        name: name,
        phone: phone,
        email:email,
      }

      dispatch(addContact(newContact))
  }


  return (
    <section>
      <div className="card border-0 shadow">
        <div className="card-header">Add new Contact</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone no..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getContact, updateContact} from '../../redux/actions/actions';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";

export default function EditContact() {

  let {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const contact = useSelector((state) => state.contacts.contact)


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');

 

  useEffect(() => {
    if(contact != null){
      setName(contact.name)
      setPhone(contact.phone)
      setEmail(contact.email)
    }
    dispatch(getContact(id))
  }, [contact])


  const handleSubmit = (e) => {
      e.preventDefault();
      const updateCont = Object.assign(contact, { 
        name : name,
        email: email,
        phone : phone
      })
      dispatch(updateContact(updateCont))
      history.push('/')
  }


  return (
    <section>
      <div className="card border-0 shadow">
        <div className="card-header">Edit Contact</div>
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
            <button type="submit" className="btn btn-warning">
              Update Contact
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

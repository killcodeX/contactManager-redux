import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/navbar";
import Contacts from "./components/contacts/contacts";
import AddContacts from './components/contacts/addContact';
import EditContact from './components/contacts/editContact';
import "./App.css";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/add-contact" component={AddContacts} />
              <Route exact path="/edit-contact/:id" component={EditContact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

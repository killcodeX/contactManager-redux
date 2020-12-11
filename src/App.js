import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/navbar";
import Contacts from "./components/contacts/contacts";
import AddContacts from './components/contacts/addContact';
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
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

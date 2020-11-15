import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

function App() {
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "The App Component")
  // );

  // const name = "Larry";
  // const showHello = false;
  // const showMath = false;

  // let math;
  // if (showMath) {
  //   math = <h4> 1 + 1 = {1 + 1}</h4>;
  // } else {
  //   math = null;
  // }

  // Inside the return div
  // <h4>Hello {name}</h4>
  //      {math}

  return (
    <Provider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route
                  exact
                  path="/contact/edit/:id"
                  component={EditContact}
                ></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

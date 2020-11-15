import React, { Component } from "react";
import { Consumer } from "../../context";
import { v1 as uuid } from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { Name, Email, Phone } = this.state;
    const newContact = {
      id: uuid(),
      Name: Name,
      Email: Email,
      Phone: Phone,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    this.setState({
      Name: "",
      Email: "",
      Phone: "",
    });
  };

  render() {
    const { Name, Email, Phone } = this.props;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      defaultValue={Name}
                      ref={this.nameInput}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      name="Email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      defaultValue={Email}
                      ref={this.emailInput}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input
                      type="text"
                      name="Phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      defaultValue={Phone}
                      ref={this.phoneInput}
                    ></input>
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

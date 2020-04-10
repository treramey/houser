import React, { Component } from "react";
import "./Wizard.css";

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: undefined,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, address, city, state, zipcode } = this.state;
    return (
      <div className="body">
        <div className="top">
          <h1>Add New Listing </h1>
          <button onClick={() => this.props.history.push("/")}>Cancel</button>
        </div>

        <form>
          <h4>Property Name</h4>
          <input onChange={this.handleChange} value={name} name="name" />
          <h4>Address</h4>
          <input onChange={this.handleChange} value={address} name="address" />
          <div>
            <h4>city</h4>
            <input onChange={this.handleChange} value={city} name="city" />
            <h4>State</h4>
            <input onChange={this.handleChange} value={state} name="state" />
          </div>
          <h4>Zip</h4>
          <input onChange={this.handleChange} value={zipcode} name="zipcode" />
        </form>
        <button>Complete</button>
      </div>
    );
  }
}

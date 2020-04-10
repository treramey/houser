import React, { Component } from "react";
import axios from "axios";
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

  saveHouses = () => {
    axios.post("/api/houses", this.state).then(() => {
      this.props.history.push("/");
    });
  };
  render() {
    const { name, address, city, state, zipcode } = this.state;
    return (
      <div className="Wiz">
        <div className="wiz_subheader">
          <h1 className="wiz_heading">Add New Listing </h1>
          <button
            className="wiz_subheader_button"
            onClick={() => this.props.history.push("/")}
          >
            Cancel
          </button>
        </div>

        <form className="wiz_input_container">
          <div className="wiz_input_box">
            <h4>Property Name</h4>
            <input onChange={this.handleChange} value={name} name="name" />
          </div>
          <div className="wiz_input_box">
            <h4>Address</h4>
            <input
              onChange={this.handleChange}
              value={address}
              name="address"
            />
          </div>
          <div className="wiz_input_box">
            <h4>city</h4>
            <input onChange={this.handleChange} value={city} name="city" />
          </div>
          <div className="wiz_input_box">
            <h4>State</h4>
            <input onChange={this.handleChange} value={state} name="state" />
          </div>
          <div className="wiz_input_box">
            <h4>Zip</h4>
            <input
              onChange={this.handleChange}
              value={zipcode}
              name="zipcode"
            />
          </div>
        </form>
        <button className="wiz_button" onClick={this.saveHouses}>
          Complete
        </button>
      </div>
    );
  }
}

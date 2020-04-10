import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
    };
  }
  componentDidMount() {
    this.getHouses();
  }

  getHouses = () => {
    axios
      .get("/api/houses")
      .then((res) => {
        console.log(res.data);
        this.setState({ hosues: res.data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    let cards = this.state.houses.map((el) => {
      return <House house={el} deleteHouse={this.deleteHouse} key={el.id} />;
    });
    return (
      <div className="Dash">
        <div className="dash_subheader">
          <h2 className="dash_heading">Dashboard</h2>
          <button
            className="dash_subheader_button"
            onClick={(_) => this.props.history.push("/wizard")}
          >
            Add New Property
          </button>
        </div>
        <div className="dash_prop_container">
          <h3 className="dash_prop_heading">Home Listings</h3>
          {cards}
        </div>
      </div>
    );
  }
}

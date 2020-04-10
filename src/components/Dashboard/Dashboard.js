import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import "./Dashboard.css";
import store, { UPDATE_HOUSES } from "../../Redux/store";

export default class Dashboard extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      houses: [],
    };
    this.getHouses = this.getHouses.bind(this);
  }
  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios
      .get("/api/houses")
      .then((res) => {
        console.log(res.data);
        this.setState({ houses: res.data });
      })
      .catch((err) => console.log(err));
  }
  deleteHouses = (id) => {
    axios.delete(`/api/houses/${id}`).then(() => this.getHouses());
  };
  render() {
    let cards = this.state.houses.map((el) => {
      return <House house={el} deleteHouses={this.deleteHouses} key={el.id} />;
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

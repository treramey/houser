import React from "react";
import delete_button from "../../assets/delete_button.png";
import "./House.css";

export default function House(props) {
  let { id, name, address, city, state, zipcode } = props.house;
  return (
    <div className="House">
      <div className="house_detail_box">
        <p>Property Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zipcode}</p>
      </div>
      <img
        src={delete_button}
        alt="delete button"
        className="house_delete_button"
        onClick={() => props.deleteHouses(id)}
      />
    </div>
  );
}

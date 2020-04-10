import { createStore } from "redux";

const initailState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: undefined,
  image: "",
  mortgage: undefined,
  rent: undefined,
  Houses: [],
};

export const UPDATE_HOUSES = "UPDATE_ HOUSES";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
export const UPDATE_RENT = "UPDATE_RENT";

function reducer(state = initailState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_HOUSES:
      console.log(payload);
      return {
        ...state,
        listing: payload,
      };
    default:
      return state;
  }
}

export default createStore(reducer);

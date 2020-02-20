import getResouceData from "../actions/index";

export default function resourceReducer(state = [], action) {
  switch (action.type) {
    case "GET_RESOURCE_DATA":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}

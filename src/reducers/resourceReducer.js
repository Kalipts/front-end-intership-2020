import filterResources from "../actions/index";

const initialState = [];

export default function resourceReducer(state = initialState, action) {
  filterResources(state, action);
}

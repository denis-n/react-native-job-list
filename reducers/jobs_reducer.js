import * as types from "../actions/types";

export const INITIAL_STATE = {
  results: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_JOBS:
      return {
        results: action.payload
      };

    default:
      return state;
  }
};

import * as types from "../actions/types";

export const INITIAL_STATE = {
  jobs: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_JOBS:
      return {
        jobs: action.payload
      };

    default:
      return state;
  }
};

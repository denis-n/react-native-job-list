import * as types from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LIKE_JOB:
      return {};

    default:
      return state;
  }
};

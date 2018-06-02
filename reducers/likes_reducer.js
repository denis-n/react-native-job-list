import * as types from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LIKE_JOB:
      const { jobkey } = action.payload;

      return [action.payload, ...state.filter(item => item.jobkey !== jobkey)];

    default:
      return state;
  }
};

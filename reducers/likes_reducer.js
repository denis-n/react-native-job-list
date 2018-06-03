import { REHYDRATE } from "redux-persist/lib/constants";

import * as types from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload) {
        return action.payload.likedJobs || INITIAL_STATE;
      } else {
        return INITIAL_STATE;
      }

    case types.LIKE_JOB:
      const { jobkey } = action.payload;

      return [action.payload, ...state.filter(item => item.jobkey !== jobkey)];

    case types.CLEAR_LIKED_JOBS:
      return INITIAL_STATE;

    default:
      return state;
  }
};

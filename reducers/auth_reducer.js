import * as types from "../actions/types";

const INITIAL_STATE = {
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FB_LOGIN_SUCCESS:
      return {
        token: action.payload
      };

    case types.FB_LOGIN_FAIL:
      return { token: null };

    default:
      return state;
  }
};

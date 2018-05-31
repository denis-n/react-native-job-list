import { AsyncStorage } from "react-native";
import { Facebook } from "expo";

import * as types from "./types";

const doFbLogin = async dispatch => {
  const appId = "1682617808501188";

  let { type, token } = await Facebook.logInWithReadPermissionsAsync(appId, {
    permissions: ["public_profile"]
  });

  if (type === "cancel") {
    return dispatch({
      type: types.FB_LOGIN_FAIL
    });
  }

  await AsyncStorage.setItem("fb_token", token);

  dispatch({
    type: types.FB_LOGIN_SUCCESS,
    payload: token
  });
};

const facebookLogin = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      // dispatch action
      dispatch({
        type: types.FB_LOGIN_SUCCESS,
        payload: token
      });
    } else {
      // start FB login process
      doFbLogin(dispatch);
    }
  };
};

export { facebookLogin };

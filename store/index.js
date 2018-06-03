import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "../reducers";

export default function configureStore() {
  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["likedJobs"]
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(thunk))
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

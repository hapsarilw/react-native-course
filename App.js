import React from "react";
import { createStore, combineReducer, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import PlacesNavigator from "./navigation/PlacesNavigator";
import placesReducer from "./store/places-reducer";

const rootReducer = combineReducer({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider>
      <PlacesNavigator />
    </Provider>
  );
}

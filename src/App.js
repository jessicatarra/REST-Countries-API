import React from "react";
import "./App.css";
import CountryList from "./country-list";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  countryList: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      console.log("voy a actualizar");
      return { ...state, countryList: action.payload };
    }
    default: {
      return state;
    }
  }
  return state;
}

const store = createStore(reducer, initialState);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;

import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff
import thisfunction from "./reducer"

import {createStore} from "redux";
import {Provider} from "react-redux"


const store = createStore(thisfunction);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer  />
    </Provider>
  );
}

export default App;

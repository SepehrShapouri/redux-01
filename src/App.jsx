import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainer/cakeContainer";
import MilkContainer from "./components/milkContainer/MilkContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <MilkContainer/>
      </div>
    </Provider>
  );
}

export default App;

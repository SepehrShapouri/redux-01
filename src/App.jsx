import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainer/cakeContainer";
import MilkContainer from "./components/milkContainer/MilkContainer";
import UserContainer from "./components/userContainer/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <MilkContainer/>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;

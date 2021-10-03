import { Provider } from "react-redux";
import store from "./lib/redux";

import InBoxScreen from "./components/InBoxScreen";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <InBoxScreen />
      <InBoxScreen />
    </Provider>
  );
}

export default App;

import Body from "./components/Body";
import appStore from "./utilities/appStore";
import { Provider } from "react-redux";

function App() {
  return(
    <Provider store={appStore}>
    <div className="App">
      <Body />
    </div>
  </Provider>
  );

};

export default App;

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Store";
import SearchPage from "./Pages/Search";

function App() {
  return (
    <Provider store={store}>
      <div>
        <SearchPage />
      </div>
    </Provider>
  );
}

export default App;

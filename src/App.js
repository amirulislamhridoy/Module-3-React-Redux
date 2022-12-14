import { Provider } from "react-redux";
import store from "./Redux/store";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./Router/Rouer";

function App() {
  
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
export default App;

// create state, action
// reducer => type, payload
// store => dispatch(), subscribe(), getState()
// use store in index.js(get store)
// useSelector(for catch data in child component)
// useDispatch(for run)
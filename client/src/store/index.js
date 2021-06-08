import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(
    applyMiddleware(thunk))
  );
 //Usamos un Middleware para poder hacer peticiones AJAX sin problemas

export default store;

/* With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. 
Middleware extends the store's abilities, and lets you write async logic that interacts with the store.
Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous 
logic that needs access to the store, and simple async logic like AJAX requests. */
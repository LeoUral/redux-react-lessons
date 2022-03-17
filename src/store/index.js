import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashReduser";
import { customerReducer } from "./customerReduser";
import { composeWithDevTools } from "redux-devtools-extension"; // приложение для Chrom браузера
import thunk from "redux-thunk";

const rootReduser = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));

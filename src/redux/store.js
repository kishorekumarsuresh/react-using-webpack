import { legacy_createStore as createStore } from "redux";
import utubeReducer from "./utube/utubeReducer";

const store = createStore(utubeReducer)

export default store
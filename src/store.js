import { createStore } from "redux"
import { Reducer } from "./reducer/Reducer"


export const store = createStore(Reducer);
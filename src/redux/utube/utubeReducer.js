import { SUBSCRIBE , UNSUBSCRIBE } from "./utubeTypes";

const initialState = {
  subs : 10
}

const utubeReducer = (state = initialState ,action) => {
  switch(action.type){
    case SUBSCRIBE : return { subs : state.subs + 1}
    case UNSUBSCRIBE : return { subs : state.subs - 1}
    default : return state
  }
}

export default utubeReducer
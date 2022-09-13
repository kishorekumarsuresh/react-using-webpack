import { SUBSCRIBE , UNSUBSCRIBE } from "./utubeTypes";

export const subscribe = () => {
  return {
    type: SUBSCRIBE
  }
}

export const unsubscribe = () => {
  return {
    type: UNSUBSCRIBE
  }
}
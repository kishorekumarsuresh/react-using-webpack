import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {subscribe,unsubscribe} from '../redux/utube/utubeAction.js'
function Home() {
  const subs = useSelector(state => state.subs)
  const dispatch = useDispatch()

  return (
    <div>
       {subs}K-Subscribers
      <button onClick={() => dispatch(subscribe())}>Subscribe</button>
      <button onClick={() => dispatch(unsubscribe())}>Unsubscribe</button>
    </div>
  )
}

export default Home

import React, { Component,Suspense,lazy } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Loader from './Loader';
//import Home from './Home';

class App extends Component {
 
    render() {
      const Home = lazy(()=>{
        return new Promise ((resolve,reject )=> {
          setTimeout(() => resolve(import('./Home')),2000) 
        })
      })

        return (
            <Provider store={store}>
            <div>
                <h1>React App Using WebPack!</h1>
                <Suspense fallback={<Loader/>}>
                  <Home/>
                </Suspense>
                {/* <Home/> */}
            </div>
            </Provider>
        );
    }

}

export default App;
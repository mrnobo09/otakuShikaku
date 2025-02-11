import {Routes,Route} from 'react-router-dom';
import Home from './Screens/Home'
import Search from './Screens/Search.js'
import Login from './Screens/Authentication/Login'
import { Provider } from 'react-redux';
import store from './State/Store.js'

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </Provider>
   
  )
}


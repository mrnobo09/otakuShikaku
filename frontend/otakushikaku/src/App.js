import {Routes,Route} from 'react-router-dom';
import Home from './Screens/Home'
import Login from './Screens/Authentication/Login'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element = {<Login/>}/>
    </Routes>
  )
}


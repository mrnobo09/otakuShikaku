import {Routes,Route} from 'react-router-dom';
import Home from './Screens/Home'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

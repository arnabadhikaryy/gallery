import './App.css'
import Details from './detailspage';
import Homegallery from "./home"
import { Route, Routes } from "react-router-dom";

function App() {
 
  return (
   <Routes>
    <Route path='/' element={ <Homegallery/>}/>
    <Route path='/details' element={ <Details/>}/>
    <Route path='/testing' element={<div>path testing</div>}/>
    <Route path='*' element={<div>404</div>}/>
   </Routes>
  )
}

export default App

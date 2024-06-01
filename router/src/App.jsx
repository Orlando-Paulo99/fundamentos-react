
import './App.css'


import{BrowserRouter, Route,Routes,} from 'react-router-dom'
import Login from './Login'
import Produto from './Produto'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/produto' element={<Produto/>}/>
        <Route path='*' element={ <h1>not foud</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

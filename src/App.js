
import Usuarios from "./pages/Usuarios"
import Home from "./pages/Home"
import Header from "./components/Header"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Toolsmanagement from "./pages/Toolsmanagement";




function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact="true" element={<Home/>}></Route>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/toolsmanagement" element={<Toolsmanagement/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
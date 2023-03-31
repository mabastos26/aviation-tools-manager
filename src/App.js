import  Ferramentas from "./pages/Ferramentas";
import Usuarios from "./pages/Usuarios"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ferramentas" element={<Ferramentas/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
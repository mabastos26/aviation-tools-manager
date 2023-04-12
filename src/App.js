import  CadastroFerramentas from "./pages/CadastroFerramentas";
import Usuarios from "./pages/Usuarios"
import Home from "./pages/Home"
import Header from "./components/Header"
import {BrowserRouter,Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ferramentas" element={<CadastroFerramentas/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
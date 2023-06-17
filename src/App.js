import  CadastroFerramentas from "./pages/CadastroFerramentas";
import Usuarios from "./pages/Usuarios"
import Home from "./pages/Home"
import Header from "./components/Header"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Details from "./pages/Details"
import Toolsmanagement from "./pages/Toolsmanagement";




function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact="true" element={<Home/>}></Route>
        <Route path="/ferramentas" element={<CadastroFerramentas/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/toolsmanagement" element={<Toolsmanagement/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
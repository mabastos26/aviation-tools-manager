import "./styles.css"
import logo from "./img/dom-geiv-trans.png"
import NavBar from "../NavBar";


function Header(){
    return(
        <div className="container-header">
            <img src={logo} alt="imagem não carregada"/>
            <NavBar link1="Home" link2="ferramentas" link3="Gerenciamento de ferramentas" link4="usuários"/>
        </div>
    )

}

export default Header;
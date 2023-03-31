import "./styles.css"
import logo from "./img/domgeiv.bmp"
import {Link} from "react-router-dom"

function Header(){
    return(
        <div className="main-container">
            <img src={logo} alt="imagem não carregada"/>
            <ul>
                <li><Link to="/" exact={true}><a>Home</a></Link></li>
                <li><Link to="/ferramentas"><a>Ferramentas</a></Link></li>
                <li><Link to="/usuarios"><a>Usuários</a></Link></li>
            </ul>
        </div>
    )

}

export default Header;
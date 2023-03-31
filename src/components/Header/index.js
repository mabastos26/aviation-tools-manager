import "./styles.css"
import logo from "../../img/domgeiv.bmp"

function Header(){
    return(
        <div className="main-container">
            <img src={logo} alt="imagem não carregada"/>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Ferramentas</a></li>
                <li><a href="">Usuários</a></li>
            </ul>
        </div>
    )

}

export default Header;
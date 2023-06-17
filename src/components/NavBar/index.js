import "./styles.css"
import {Link} from "react-router-dom"

export default function NavBar({link1="",link2="",link3="",link4=""}){
    return(
     <ul>
                <li><Link to="/" exact={true}><a>{link1}</a></Link></li>
                <li><Link to="/ferramentas"><a>{link2}</a></Link></li>
                <li><Link to="/toolsmanagement"><a>{link3}</a></Link></li>
                <li><Link to="/usuarios"><a>{link4}</a></Link></li>
    </ul>
    )
   
}
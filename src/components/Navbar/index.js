import "./styles.css"

function Navbar(){
    return(
        <div className="main-container-navbar">
            <ul>
                <li><button>Adicionar</button></li>
                <li><button>Remover</button></li>
                <li><button>Avançar</button></li>
                <li><button>Retroceder</button></li>
            </ul>
        </div>
    )
}

export default Navbar;
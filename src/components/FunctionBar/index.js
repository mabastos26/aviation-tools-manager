import Button from "../Button";

function FunctionBar({getFunction}){
    return(
        <ul>
                <li ><Button getFunction={getFunction} text="cadastrar"/></li>
                <li ><Button getFunction={getFunction} text="editar"/></li>
                <li ><Button getFunction={getFunction} text="apagar"/></li>          
        </ul>
    )
}

export default FunctionBar;
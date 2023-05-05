import "./styles.css"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from "react-redux"

const Register=()=>{ 
    
    
    console.log("iniciou o component register");
    const [id,setId]=useState(useSelector(states=>states.SelectedToolReducer.id));
    const [codigo,setCodigo]=useState(useSelector(states=>states.SelectedToolReducer.codigo));
    const [pn,setPn]=useState(useSelector(states=>states.SelectedToolReducer.pn)); 
    const [sn,setSn]=useState(useSelector(states=>states.SelectedToolReducer.sn)); 
    const [nomenclatura,setNomenclatura]=useState(useSelector(states=>states.SelectedToolReducer.nomenclatura));
    const [fabricante,setFabricante]=useState(useSelector(states=>states.SelectedToolReducer.fabricante));
    const [calibravel,setCalibravel]=useState(false);
    const [quantidade,setQuantidade]=useState(0);
    const [compoeFerramenta,setCompoeFerramente]=useState(0);
    const [localizacao,setLocalizacao]=useState(0);

   
    return(
    <div className="container-register">
        <div className="container-navbar">
                <ul>
                    <li><button>Adicionar</button></li>
                    <li><button>Remover</button></li>
                    <li><button>Avançar</button></li>
                    <li><button>Retroceder</button></li>
                </ul>
        </div>
        <label id="pn">Part Number</label>
        <input type="text" id="pn" value={pn}/>
        <label id="sn">Serial Number</label>
        <input type="text" id="sn" value={sn}/>
        <label id="codigo">Código</label>
        <input type="text" id="codigo" value={codigo}/>
        <label id="nomenclatura">Nomenclatura</label>
        <input type="text" id="nomenclatura" value={nomenclatura}/>
        <label id="fabricante">Fabricante</label>
        <input type="text" id="fabricante" value={fabricante}/>
        <label id="quantidade">Quantidade</label>
        <input type="text" id="quantidade"/>
        <label id="calibravel">A ferrmaneta é calibrável?</label>
        <input type="checkbox" id="calibravel"/>
</div>
)
}

export default Register;
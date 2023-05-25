import "./styles.css"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from "react-redux"

const Register=()=>{
    const globalId=useSelector(states=>states.SelectedToolReducer.id)
    const globalCodigo=useSelector(states=>states.SelectedToolReducer.codigo)
    const globalPn=useSelector(states=>states.SelectedToolReducer.pn)
    const globalSn=useSelector(states=>states.SelectedToolReducer.sn)
    const globalNomenclatura=useSelector(states=>states.SelectedToolReducer.nomenclatura)
    const globalFabricante=useSelector(states=>states.SelectedToolReducer.fabricante)

    const [id,setId]=useState(globalId);
    const [codigo,setCodigo]=useState(globalCodigo);
    const [pn,setPn]=useState(globalPn); 
    const [sn,setSn]=useState(globalSn); 
    const [nomenclatura,setNomenclatura]=useState(globalNomenclatura);
    const [fabricante,setFabricante]=useState(globalFabricante);
    const [calibravel,setCalibravel]=useState(false);
    const [quantidade,setQuantidade]=useState(0);
    const [compoeFerramenta,setCompoeFerramente]=useState(0);
    const [localizacao,setLocalizacao]=useState(0);
    
    useEffect(()=>{
        setId(globalId);
        setCodigo(globalCodigo);
        setPn(globalPn);
        setSn(globalSn);
        setNomenclatura(globalNomenclatura);
        setFabricante(globalFabricante);
    })
    
   
   

   
    return(
    <div className="container-register">
        <div className="container-navbar">
                <ul>
                    <li><button>Adicionar</button></li>
                    <li><button>Remover</button></li>
                    <li><button>Editar</button></li>
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
        <label id="calibravel">A ferramenta é calibrável?</label>
        <input type="checkbox" id="calibravel" checked="true"/>
</div>
)
}

export default Register;
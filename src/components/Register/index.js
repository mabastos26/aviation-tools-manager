import "./styles.css"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Register=({selectedTool})=>{ 
    
    console.log("iniciou o component register");
    const [codigo,setCodigo]=useState('') ;
    const [pn,setPn]=useState(''); 
    const [sn,setSn]=useState(''); 
    const [nomenclatura,setNomenclatura]=useState('');
    const [fabricante,setFabricante]=useState('');
    const [calibravel,setCalibravel]=useState(false);
    const [quantidade,setQuantidade]=useState(0);
    const [compoeFerramenta,setCompoeFerramente]=useState(0);
    const [localizacao,setLocalizacao]=useState(0);

    /*useEffect(()=>{
        if(selectedTool.length!=0){
            setCodigo(selectedTool.codigo)
            setPn(selectedTool.pn)
            setSn(selectedTool.sn)
            setNomenclatura(selectedTool.nomenclatura)
            setFabricante(selectedTool.fabricante)
        }

    },[selectedToolId])*/
    
  
    
    const notify=()=>toast("Tarefa salva com sucesso!");

    
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
    {
    selectedTool.map(item=>{
        return(
        <>
            <label id="pn">Part Number</label>
            <input type="text" id="pn" value={item.pn}/>
            <label id="sn">Serial Number</label>
            <input type="text" id="sn" value={item.sn}/>
            <label id="codigo">Código</label>
            <input type="text" id="codigo" value={item.codigo}/>
            <label id="nomenclatura">Nomenclatura</label>
            <input type="text" id="nomenclatura" value={item.nomenclatura}/>
            <label id="fabricante">Fabricante</label>
            <input type="text" id="fabricante" value={item.fabricante}/>
            <label id="quantidade">Quantidade</label>
            <input type="text" id="quantidade"/>
            <label id="calibravel">A ferrmaneta é calibrável?</label>
            <input type="checkbox" id="calibravel"/>
        </>
        )})}
</div>
)
}

export default Register;
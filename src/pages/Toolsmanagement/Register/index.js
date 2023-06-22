import Button from "../../../components/Button";
import "./styles.css"
import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register({toolSaved}){
    const [savedTool,setSavedTool]=useState(
        {
            pn:"",
            sn:"",
            codigo:"",
            nomenclatura:"",
            fabricante:"",
            quantidade:"",
            calibravel:false
        });
    const notify=()=>toast("Ferramenta salva com sucesso!")

    async function saveTool(params){
        const tool = await axios.post("http://localhost:8080/tool/save",{
            pn:params.pn,
            sn:params.sn,
            codigo:params.codigo,
            nomenclatura:params.nomenclatura,
            fabricante:params.fabricante,
            quantidade:params.quantidade,
            calibravel:params.calibravel
        });
        toolSaved();
        notify();
        return tool;
        
     } 

     console.log(savedTool.nomenclatura);
    
    return( 
       <div className="container-register">
            <ToastContainer/>
            <label htmlFor="pn">PN</label>
            <input type="text" id="pn" onChange={(text)=>setSavedTool({...savedTool,pn:text.target.value})}/>
            <label htmlFor="sn">SN</label>
            <input type="text" id="sn" onChange={(text)=>setSavedTool({...savedTool,sn:text.target.value})}/>
            <label htmlFor="codigo">CÓDIGO</label>
            <input type="text" id="codigo" onChange={(text)=>setSavedTool({...savedTool,codigo:text.target.value})}/>
            <label htmlFor="nomenclatura">NOMENCLATURA</label>
            <input type="text" id="nomenclatura" onChange={(text)=>setSavedTool({...savedTool,nomenclatura:text.target.value})}/>
            <label htmlFor="fabricante">FABRICANTE</label>
            <input type="text" id="fabricante" onChange={(text)=>setSavedTool({...savedTool,fabricante:text.target.value})}/>
            <label htmlFor="quantidade">QUANTIDADE</label>
            <input type="text" id="quantidade" onChange={(text)=>setSavedTool({...savedTool,quantidade:text.target.value})}/>
            <label htmlFor="calibravel" >É CALIBRÁVEL?</label>
            <input type="checkbox" id="calibravel" onChange={(text)=>setSavedTool({...savedTool,calibravel:text.target.value})}/>
            <Button text="salvar" saveTool={saveTool} object={savedTool}/>
       </div>

    )
}

export default Register;
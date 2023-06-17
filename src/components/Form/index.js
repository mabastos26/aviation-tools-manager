import "./styles.css"
import { useEffect, useState } from "react"
import NavBar from "../NavBar";

const Register=({field1="",field2="",field3="",field4="",field5="",field6="",field7="",selectedTool})=>{
   
    const [id,setId]=useState("");
    const [codigo,setCodigo]=useState("");
    const [pn,setPn]=useState(""); 
    const [sn,setSn]=useState(""); 
    const [nomenclatura,setNomenclatura]=useState("");
    const [fabricante,setFabricante]=useState("");
    const [calibravel,setCalibravel]=useState(false);
    const [quantidade,setQuantidade]=useState(0);
    //const [compoeFerramenta,setCompoeFerramente]=useState(selectedTool.compoeFerramenta);
    //const [localizacao,setLocalizacao]=useState(selectedTool.localizacao);
    

    useEffect(()=>{
        setCodigo(selectedTool.codigo)
        setPn(selectedTool.pn)
        setSn(selectedTool.sn)
        setNomenclatura(selectedTool.nomenclatura)
        setFabricante(selectedTool.fabricante)
        setCalibravel(selectedTool.calibravel)
        setQuantidade(selectedTool.quantidade)
    },[selectedTool])
   
    
    return(
    <div className="container-register">
        <div className="container-navbar">
           <NavBar link1="adicionar" link2="editar"/>
        </div>
        <label htmlFor={field1}>{field1}</label>
        <input type="text" id={field1} value={pn}/>
        <label htmlFor={field2}>{field2}</label>
        <input type="text" id={field2} value={sn}/>
        <label htmlFor={field3}>{field3}</label>
        <input type="text" id={field3} value={codigo}/>
        <label htmlFor={field4}>{field4}</label>
        <input type="text" id={field4} value={nomenclatura}/>
        <label htmlFor={field5}>{field5}</label>
        <input type="text" id={field5} value={fabricante}/>
        <label htmlFor={field6}>{field6}</label>
        <input type="text" id={field6} value={quantidade}/>
        <label htmlFor={field7} >{field7}</label>
        <input type="checkbox" id={field7} checked={calibravel}/>
</div>
)
}

export default Register;
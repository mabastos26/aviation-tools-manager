import './styles.css'
import "react-datepicker/dist/react-datepicker.css";
import {FaArrowLeft} from 'react-icons/fa';
import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details=({history})=>{
     //inicialização dos useStates da página 
     const [pn,setPn]=useState(''); 
     const [sn,setSn]=useState(''); 
     const [nomenclatura,setNomenclatura]=useState('');
     const notifySave = () => toast("tarefa salva com sucesso!");
     const notifyRemove = () => toast("tarefa removida com sucesso!");
    

     const params=useParams();
     const id=params.id;
     console.log(id);

     useEffect(()=>{
        getTool()
     },[])

     const getTool=async ()=>{
        const tool=await axios.get("http://localhost:8080/tools/"+id);
        setPn(tool.data.pn);
        setSn(tool.data.sn);
        setNomenclatura(tool.data.nomenclatura);
        console.log(tool);
     }

     const removeTool=async()=>{
        await axios.delete("http://localhost:8080/tools/"+id);
        notifyRemove();
        history.push('/ferramentas');

     }

     const updateTool=async ()=>{
        
        await axios.put("http://localhost:8080/tools/"+id,{
            pn,
            sn,
            nomenclatura,
        })
        notifySave();
        history.push('/ferramentas');
    }
     
    


    return(
        <div className="container-details">
            <ToastContainer />
            <div className="subcontainer-details">
                <Link to="/ferramentas">
                    <div className="voltar">
                        <FaArrowLeft/>
                        <h2>Voltar</h2>
                    </div>
                </Link>
                <div className="textos">
                        PN:
                        <input value={pn} onChange={(txt)=>setPn(txt.target.value)}/>
                        SN:
                        <input value={sn} onChange={(txt)=>setSn(txt.target.value)}/>
                        Nomenclatura:
                        <input value={nomenclatura} onChange={(txt)=>setNomenclatura(txt.target.value)}/>
                </div>
                <div className="botoes">
                    <button onClick={updateTool}>Salvar</button>
                    <button onClick={removeTool}>Excluir</button>
                </div>
            </div>
        </div>

    );
}


export default Details;
import './styles.css'
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


const CadastroFerramentas=()=>{

    //inicialização dos useStates da página
     const [codigo,setCodigo]=useState('');  
     const [pn,setPn]=useState(''); 
     const [sn,setSn]=useState(''); 
     const [nomenclatura,setNomenclatura]=useState('');
     const [fabricante,setFabricante]=useState('');
     const [calibravel,setCalibravel]=useState(false);
     const [date,setDate]=useState('');
     const [quantidade,setQuantidade]=useState(0);
     const [compoeFerramenta,setCompoeFerramente]=useState(0);
     const [localizacao,setLocalizacao]=useState(0);
     const [toolsBD,setToolsBD]=useState([]);

     const notify=()=>toast("Tarefa salva com sucesso!")
     
    //No momento de carga da página, busca todas as ferramentas no banco de dados
     useEffect(()=>{
        getTools();
     },[]);

    const saveTool= async ()=>{
        const Tool = await axios.post("http://localhost:8888/todo",{
            codigo,
            pn,
            sn,
            nomenclatura,
            fabricante,
            calibravel,
            date,
            quantidade,
            compoeFerramenta,
            localizacao
        });
        getTools();
        notify();
     } 
    
     const getTools=async()=>{
        const Tools = await axios.get("http://localhost:8888/todo");
        setToolsBD(Tools.data);
        console.log(Tools);
     }
    
     const updateTool=async (id,status)=>{
        
        await axios.put("http://localhost:8888/todo/"+id,{
            status:!status,
        })
        getTools();
    }


     return(
        <div className="container-CadastroFerramentas">
            <ToastContainer />
            <div className="subcontainer-CadastroFerramentas">
                <div className="container-left">
                    <h1>CADASTRO DE FERRAMENTAS</h1>
                    <div className="container-form">
                        <input placeholder='codigo' onChange={(txt)=>setCodigo(txt.target.value)}/>
                        <input placeholder='part  number' onChange={(txt)=>setPn(txt.target.value)}/>
                        <input placeholder='serial number' onChange={(txt)=>setSn(txt.target.value)}/>
                        <input placeholder='nomenclatura' onChange={(txt)=>setNomenclatura(txt.target.value)}/>
                        <input placeholder='fabricante' onChange={(txt)=>setFabricante(txt.target.value)}/>
                        <input type='checkbox' onChange={(txt)=>setCalibravel(txt.target.value)}/>
                        <input placeholder='quantidade' onChange={(txt)=>setQuantidade(txt.target.value)}/>
                        <input placeholder='compoe ferramenta' onChange={(txt)=>setCompoeFerramente(txt.target.value)}/>
                        <input placeholder='localizacao' onChange={(txt)=>setLocalizacao(txt.target.value)}/>               
                        <button onClick={saveTool}>salvar</button>
                    </div>
                </div>
                    <ul className="container-right">
                        {toolsBD.map(item=>{   
                            return(
                            <li key={item.id}>
                                <div>
                                    <Link to={"/Details/"+item.id}>
                                        <h2 >{item.nomenclatura}</h2>
                                    </Link>
                                </div>  
                            </li>  
                            ) 
                             })} 
                    </ul>
            </div>
        </div>
     )
}

export default CadastroFerramentas;
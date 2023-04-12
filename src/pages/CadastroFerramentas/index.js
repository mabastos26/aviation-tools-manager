import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCheck } from 'react-icons/fa';
import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Service'


const CadastroFerramentas=()=>{

    //inicialização dos useStates da página
     const [codigo,setCodigo]=useState('');  
     const [pn,setPn]=useState(''); 
     const [sn,setSn]=useState(''); 
     const [nomenclatura,setNomenclatura]=useState('');
     const [fabricante,setFabricante]=useState('');
     const [calibravel,setCalibravel]=useState(false);
     const [data,setData]=useState('');
     const [quantidade,setQuantidade]=useState(0);
     const [compoeFerramenta,setCompoeFerramente]=useState(0);
     const [localizacao,setLocalizacao]=useState(0);
     const [toolsBD,setToolsBD]=useState([]);

     const notify=()=>toast("Tarefa salva com sucesso!")
     
    //No momento de carga da página, busca todas as ferramentas no banco de dados
     useEffect(()=>{
        getTools();
     },[]);

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
                        <input type='checkbox' value={true} onChange={(txt)=>setCalibravel(txt.target.value)}/>
                        <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(txt)=>setDate(txt)} />
                        <input placeholder='quantidade' onChange={(txt)=>setQuantidade(txt.target.value)}/>
                        <input placeholder='compoe ferramenta' onChange={(txt)=>setCompoeFerramente(txt.target.value)}/>
                        <input placeholder='localizacao' onChange={(txt)=>setLocalizacao(txt.target.value)}/>               
                        <button onClick={Service.saveTool}>salvar</button>
                    </div>
                </div>
                    <ul className="container-right">
                        {tasksBD.map(item=>{   
                            const formattedDate= moment(item.date).format("DD/MM/yyyy");
                            return(
                            <li key={item._id}>
                                <div>
                                    <Link to={"/Details/"+item._id}>
                                        <h2 style={item.status? {} : {textDecoration:'line-through'} }>{item.title}</h2>
                                        <h3>{formattedDate}</h3>
                                        <h3>{item.description}</h3>
                                    </Link>
                                </div>  
                                <button onClick={()=>updateTask(item._id,item.status)}>
                                    <FaCheck size={22} color={"#1a1a1a"}/>
                                </button>
                            </li>  
                            ) 
                             })} 
                    </ul>
            </div>
        </div>
     )
}

export default CadastroFerramentas;
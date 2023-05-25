import './styles.css'
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
        const tool = await axios.post("http://localhost:8080/tool/save",{
            codigo,
            pn,
            sn,
            nomenclatura,
            fabricante,
        });
        getTools();
        notify();
     } 
    
     const getTools=async()=>{
        const Tools = await axios.get("http://localhost:8080/tool/all");
        setToolsBD(Tools.data);
        console.log(Tools);
     }
    
     const updateTool=async (id,status)=>{
        
        await axios.put("http://localhost:8080/tool/"+id,{
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
                        <div className='calibravel'>
                            <h2>Calibravel?</h2>
                            <input type="checkbox" id="topping" name="topping" value="Paneer" />
                        </div>
                        <input placeholder='quantidade' onChange={(txt)=>setQuantidade(txt.target.value)}/>
                        <input placeholder='compoe ferramenta' onChange={(txt)=>setCompoeFerramente(txt.target.value)}/>
                        <input placeholder='localizacao' onChange={(txt)=>setLocalizacao(txt.target.value)}/>               
                        <button onClick={saveTool}>salvar</button>
                    </div>
                </div >
                <div className="container-right">
                    <table className='tools'>
                        <thead>
                                <tr className='title'>
                                    <td>PN</td>
                                    <td>SN</td>
                                    <td>NOMENCLATURA</td>              
                                </tr>
                         </thead>
                         <tbody className='scroll'>
                                
                                {toolsBD.map(item=>{ 
                                return(
                                <tr>
                                    <td>{item.pn}</td>
                                    <td>{item.sn}</td>
                                    <Link to={"/details/"+item.id}> <a className='toolButton'><td>{item.nomenclatura}</td></a> </Link>       
                                </tr> 
                                
                                )     
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     )
}

export default CadastroFerramentas;
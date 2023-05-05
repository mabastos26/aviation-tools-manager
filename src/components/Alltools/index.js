import {FaArrowRight} from 'react-icons/fa';
import "./styles.css"
import { useSelector,useDispatch } from "react-redux";
import {useState} from "react"

const Alltools=({allTools,/*selectedToolId,childToParent*/})=>{
    const[selectedToolId,setSelectedToolId]=useState(1);
   /*const id=useSelector(states=>states.SelectedToolReducer.id);*/
    const dispatch=useDispatch();
    const updateSelectedTool=(item)=>{
        dispatch({
            type: "SET_ID",
            payload:item.id
        })
        dispatch({
            type: "SET_CODIGO",
            payload:item.codigo
        })
        dispatch({
            type: "SET_PN",
            payload:item.pn
        })
        dispatch({
            type: "SET_SN",
            payload:item.sn
        })
        dispatch({
            type: "SET_NOMENCLATURA",
            payload:item.nomenclatura
        })
        dispatch({
            type: "SET_FABRICANTE",
            payload:item.fabircante
        })
        setSelectedToolId(item.id);
    }
    

    return(
        <div className="container-alltools">
            <div className="search-tool">
                <label for="serach">Buscar ferramenta:</label><input type="text" />
            </div>
            <div className="all-tools">
                        {allTools
                            .map(item=>{
                            return(
                            <div className='line'>
                                <div  hidden={item.id==selectedToolId?false:true}>
                                    <FaArrowRight/>
                                </div>
                                <button id={item.id} className="itens" onClick={()=>updateSelectedTool(item)/*childToParent(item.id)*/}>   
                                    <h2>{item.nomenclatura}</h2>
                                </button>
                            </div>
                            )})    
                        }           
            </div>
        </div>
    )
}

export default Alltools;
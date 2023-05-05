import {FaArrowRight} from 'react-icons/fa';
import "./styles.css"
import { useSelector,useDispatch } from "react-redux";
import {useState} from "react"

const Alltools=({allTools})=>{
    const[selectedToolId,setSelectedToolId]=useState(1);
    const dispatch=useDispatch();
    const updateSelectedTool=(item)=>{
        dispatch({
            type:"SET_TOOL",
            payload:item
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
                            <div key={item.id}className='line'>
                                <div  hidden={item.id==selectedToolId?false:true}>
                                    <FaArrowRight/>
                                </div>
                                <button className="itens" onClick={()=>updateSelectedTool(item)/*childToParent(item.id)*/}>   
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
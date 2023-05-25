import {FaArrowRight} from 'react-icons/fa';
import "./styles.css"
import {useDispatch,useSelector } from "react-redux";
import {useState} from "react"
import SearchBar from '../Searchbar';

const Alltools=({allTools,isLoaded,erro})=>{
    const[selectedToolId,setSelectedToolId]=useState(0);
    const[filteredTools,setFilteredTools]=useState([allTools]);
   
    const toolsFromReducer=useSelector(states=>states.filteredToolsReducer);

    const dispatch=useDispatch();
    const updateSelectedTool=(item)=>{
        dispatch({
            type:"SET_TOOL",
            payload:item
        })
        setSelectedToolId(item.id);
    }

    const updateFilteredTools=(item)=>{
        dispatch({
            type:"ALL_TOOLS",
            payload:item
        })
    }

    function getSearchFromChild(filteredTools){
            updateFilteredTools(filteredTools);
            setFilteredTools(toolsFromReducer);
    }

  
    if (erro) {
        return <>{erro}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    }
    else{
    return(
        <div className="container-alltools">
            <SearchBar searchTools={getSearchFromChild}/>
            <div className="all-tools">
                        {
                            getSearchFromChild(filteredTools).map(item=>{
                            return(
                            <div key={item.id}className='line'>
                                <div  hidden={item.id===selectedToolId?false:true}>
                                    <FaArrowRight/>
                                </div>
                                <button  className="itens" onClick={()=>updateSelectedTool(item)}>   
                                    <h2>{item.nomenclatura}</h2>
                                </button>
                            </div>
                            )})    
                        }           
            </div>
        </div>
    )
     }
}

export default Alltools;
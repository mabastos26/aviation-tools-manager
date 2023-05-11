import {FaArrowRight} from 'react-icons/fa';
import "./styles.css"
import {useDispatch } from "react-redux";
import {useState} from "react"

const Alltools=({allTools,isLoaded,erro})=>{
    const[selectedToolId,setSelectedToolId]=useState(0);
    const[query,setQuery]=useState("");
    const[searchParam]=useState(["nomenclatura"]);


    const dispatch=useDispatch();
    const updateSelectedTool=(item)=>{
        dispatch({
            type:"SET_TOOL",
            payload:item
        })
        setSelectedToolId(item.id);
    }

    function search(items){
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                );
            });
        });
    }
    
    if (erro) {
        return <>{erro}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    }
    else{
    return(
        <div className="container-alltools">
            <div className="search-tool">
                <label htmlFor="search-form">Buscar ferramenta:</label>
                <input 
                    type="search"
                    id="search-form"
                    name="search-form" 
                    placeholder="Search for..."
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
            </div>
            <div className="all-tools">
                        {
                            search(allTools).map(item=>{
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
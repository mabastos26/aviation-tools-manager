import {FaArrowRight} from 'react-icons/fa';
import "./styles.css"
import { useState } from 'react';

const List=({filteredTools,isLoaded,erro,selectTool,selectedTool})=>{


    if (erro) {
        return <>{erro}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    }
    else{
    return(
        <div className="container-List">
            <div className="all-tools">
                        {
                            filteredTools.map(item=>{
                            return(
                            <div key={item.id}className='line'>
                                <div  className={item.id===selectedTool.id?"selected":"notSelected"}>
                                    <FaArrowRight/>
                                </div>
                                <button  className="itens" onClick={()=>selectTool(item)}>   
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

export default List;
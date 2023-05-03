import {FaArrowRight} from 'react-icons/fa';
import "./styles.css"
import { useState } from 'react';
import Toolsmanage from '../../pages/Toolsmanage';

const Alltools=({allTools,selectedToolId,childToParent})=>{
    

    return(
        <div className="container-alltools">
            <div className="search-tool">
                <label for="serach">Buscar ferramenta:</label><input type="text" />
            </div>
            <div className="all-tools">
                        {allTools.map(item=>{
                        return(
                        <div className='line'>
                            <div hidden={item.id==selectedToolId?false:true}>
                                <FaArrowRight/>
                            </div>
                            <button id={item.id} className="itens" onClick={()=>childToParent(item.id)}>   
                                <h2>{item.nomenclatura}</h2>
                            </button>
                        </div>
                        )})}           
            </div>
        </div>
    )
}

export default Alltools;
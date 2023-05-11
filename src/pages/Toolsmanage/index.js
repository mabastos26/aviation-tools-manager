import "./styles.css"
import Register from "../../components/Register";
import Toolcalibration from "../../components/Toolcalibration";
import Kitinformation from "../../components/Kitinformation";
import Alltools from "../../components/Alltools";
import axios from "axios";
import {useState,useEffect } from "react";

   

const Toolsmanage=()=>{
    const url = "http://localhost:8080/tools/all"
    //inicialização dos useStates da página
   
    const [toolsBD,setToolsBD]=useState([]);
    
    //No momento de carga da página, busca todas as ferramentas no banco de dados
    useEffect(()=>{
        getTools();
     },[]);
   
     const getTools=async()=>{
        const response =await fetch(url);
        response.json()
                .then(result=>setToolsBD(result))
    
     }

     console.log(toolsBD)
  
     

    return(
        <div className="container-toolsmanage">
            <div className="container-up">
                <div className="container-left">
                        <Register/>
                    <div className="container-left-info">
                        <Toolcalibration/>
                        <Kitinformation/>
                    </div>
              </div>
                <div className="container-right">
                    <Alltools allTools={toolsBD}/>
                </div>
            </div>
            <div className="container-down">
                <div className="sub-container-down">
                    Area sub-container down!!
                </div>
            </div>
        </div>
    )
}

export default Toolsmanage;
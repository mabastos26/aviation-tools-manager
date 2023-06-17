import "./styles.css"
import Form from "../../components/Form";
import Toolcalibration from "../../components/Toolcalibration";
import Kitinformation from "../../components/Kitinformation";
import List from "../../components/List";
import {useState,useEffect } from "react";
import SearchBar from "../../components/Searchbar";


   

const Toolsmanagement=()=>{
    const url = "http://localhost:8080/tool/all"
    //inicialização dos useStates da página
    
    const [toolsBD,setToolsBD]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);
    const [erro,setErro]=useState("");

    const[filteredTools,setFilteredTools]=useState([]);
    const[selectedTool,setSelectedTool]=useState({});
    
    //No momento de carga da página, busca todas as ferramentas no banco de dados
    useEffect(()=>{
        getTools();
     },[]);
   
     const getTools=async()=>{
        const response =await fetch(url);
        response.json()
                .then(result=>{
                    setToolsBD(result);
                    setFilteredTools(result);
                    setIsLoaded(true);
                })
                .catch((erro)=>setErro(erro.message))  
            }

     //Funções 

     function selectTool(tool){
        setSelectedTool(tool);
     }

     function filterTools(filteredTools){
        setFilteredTools(filteredTools)
     }
 

    return(
        <div className="container-toolsmanage">
            <div className="container-up">
                <div className="container-left">
                        <Form 
                        field1="PN"
                        field2="SN"
                        field3="Codigo"
                        field4="Nomenclatura"
                        field5="fabricante"
                        field6="Quantidade Total"
                        field7="A ferrmenta é calibravel?"
                        selectedTool={selectedTool}/>
                    <div className="container-left-info">
                        <Toolcalibration/>
                        <Kitinformation/>
                    </div>
              </div>
                <div className="container-right">
                <SearchBar 
                            allTools={toolsBD}
                            filterTools={filterTools}/>
                <List 
                            filteredTools={filteredTools}
                            isLoaded={isLoaded}
                            erro={erro}
                            selectTool={selectTool}
                            selectedTool={selectedTool}/>
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

export default Toolsmanagement;
import "./styles.css"
import Details from "./Details";
import Toolcalibration from "./Toolcalibration";
import Kitinformation from "./Kitinformation";
import List from "../../components/List";
import {useState,useEffect } from "react";
import SearchBar from "../../components/Searchbar";
import FunctionBar from "../../components/FunctionBar";
import Update from "./Update";
import Register from "./Register"

const Toolsmanagement=()=>{
    const url = "http://localhost:8080/tool/all"

    //Initialize the page states
    
    const [toolsBD,setToolsBD]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);
    const [erro,setErro]=useState("");
    const[filteredTools,setFilteredTools]=useState([]);
    const[selectedTool,setSelectedTool]=useState({});
    const[selectedFunction,setSelectedFunction]=useState("");
    
    //On page load, get every tools from data base

    useEffect(()=>{
        getTools();
     },[selectedFunction]);
   
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

     //Chield feedback

     function selectTool(tool){
        setSelectedTool(tool);
        setSelectedFunction("details");
     }

     function filterTools(filteredTools){
        setFilteredTools(filteredTools)
     }

     function getFunction(functionBar){
        setSelectedFunction(functionBar);
    }

    function toolSaved(){
        getTools();
    }
 
    return(
        <div className="container-toolsmanage">
            <div className="container-up">
                <div className="container-left">
                <FunctionBar getFunction={getFunction}/>
                        {
                            selectedFunction==="details"?<Details selectedTool={selectedTool} getFunction={getFunction}/>
                            :(selectedFunction==="cadastrar"?<Register toolSaved={toolSaved}/>:<Update selectedTool={selectedTool}/>)
                        }
                    <div className="container-left-info">
                        <Toolcalibration/>
                        <Kitinformation/>
                    </div>
              </div>
                <div className="container-right">
                <div className="container-right-up">
                <SearchBar 
                            allTools={toolsBD}
                            filterTools={filterTools}/>
                </div>
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
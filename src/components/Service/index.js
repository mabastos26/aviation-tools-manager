import axios from 'axios'


const Service=()=>{

    const saveTool= async (params)=>{
        const tool = await axios.post("http://localhost:8080/tools/save",params);
        return tool;
     } 
    
     const getTools=async()=>{
        const Tools = await axios.get("http://localhost:8080/tools/all");
        return Tools;
     }
    
     const updateTool=async (id)=>{
        await axios.put("http://localhost:8080/tools/"+id);
    }

    const deleteTool=async (id)=>{
        await axios.delete("http://localhost:8080/tools/"+id);
    }
}

export default Service;
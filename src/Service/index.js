import axios from 'axios'

const Service=()=>{
    
    const saveTool= async ()=>{
    const Tool = await axios.post("http://localhost:8888/todo",{
        title,
        description,
        date
    });
    getTools();
    notify();
 } 

 const getTools=async()=>{
    const Tools = await axios.get("http://localhost:8888/todo");
    setToolsBD(Tools.data);
    console.log(Tools);
 }

 const updateTool=async (id,status)=>{
    
    await axios.put("http://localhost:8888/todo/"+id,{
        status:!status,
    })
    getTools();
}
}

export default Service;

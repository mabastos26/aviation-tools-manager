import "./styles.css"
import { useEffect} from "react"


const Details=({selectedTool})=>{
    useEffect(()=>{
       
    },[selectedTool])
    return(

    <div className="container-details">
        <label htmlFor="pn">PN</label>
        <input type="text" id="pn" value={selectedTool.pn}/>
        <label htmlFor="sn">SN</label>
        <input type="text" id="sn" value={selectedTool.sn}/>
        <label htmlFor="codigo">CÓDIGO</label>
        <input type="text" id="codigo" value={selectedTool.codigo}/>
        <label htmlFor="nomenclatura">NOMENCLATURA</label>
        <input type="text" id="nomenclatura" contentEditable="true"  value={selectedTool.nomenclatura}/>
        <label htmlFor="fabricante">FABRICANTE</label>
        <input type="text" id="fabricante" value={selectedTool.fabricante}/>
        <label htmlFor="quantidade">QUANTIDADE</label>
        <input type="text" id="quantidade" value={selectedTool.quantidade}/>
        <label htmlFor="calibravel" >É CALIBRÁVEL?</label>
        <input type="checkbox" id="calibravel" checked={selectedTool.calibravel}/>
</div>
)
}

export default Details;
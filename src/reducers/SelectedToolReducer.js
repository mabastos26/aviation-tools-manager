const initialState={
    "id": 1,
    "codigo": null,
    "pn": "cx-ferramenta",
    "sn": "1",
    "nomenclatura": "caixa de ferramenta",
    "fabricante": ""
}
//O Reducer é um a função, e não um componente react, que recebe dois parâmetros, o estado inicial e a action que possui os dados que alteram o redux. Dependendo do tipo da action, um determinado dado é alterado.
const SelectedToolReducer=(state=initialState, action)=>{
    if(action.type==="SET_TOOL")
        return action.payload
    else
        return state;  
}

export default SelectedToolReducer
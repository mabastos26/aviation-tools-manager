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

    switch(action.type){
        case "SET_ID":
            return ({
                ...state,
                id: action.payload.id
            })
            break;
        case "SET_CODIGO":
            return({
                ...state,
                codigo: action.payload.codigo
            })
            break;
        case "SET_PN":
            return({
                ...state,
                pn: action.payload.pn
            })
        case "SET_SN":
            return({
                ...state,
                sn: action.payload.sn
            })
        case "SET_NOMENCLATURA":
            return({
                ...state,
                nomenclatura: action.payload.nomenclatura
            })
        case "SET_FABRICANTE":
            return({
                ...state,
                fabricante: action.payload.fabricante
            })
    }
    return state;  
}

export default SelectedToolReducer
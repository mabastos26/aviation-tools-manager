import { combineReducers } from "redux";
import SelectedToolReducer from "./SelectedToolReducer";


//O Reducer/index.js cria um repsitorio combinado de Reducers, isso fcilita a importação de diversos reducers no index.js principal. Através do componente CombineReducer do redux ele exporta todos os Reducers dentro de um objeto.
export default combineReducers({
    SelectedToolReducer
})
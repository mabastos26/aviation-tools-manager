const initialState=[]

const  FilteredToolsReducer=(state=initialState,action)=>{
    if(action.type==="ALL_TOOLS")
    return action.payload
else
    return state;  
}

export default FilteredToolsReducer;
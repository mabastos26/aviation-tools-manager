import "./styles.css"

function Button({text,getFunction,saveTool,object}){
    return(
        <button  onClick={()=>{
            if(getFunction)
                getFunction(text);
            if(saveTool&&object)
                saveTool(object)
        }
        }>   
            {text}
        </button>

    )
}

export default Button;
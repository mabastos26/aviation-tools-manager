
import {useState,useEffect} from "react"


const SearchBar=({allTools,filterTools})=>{
    const[query,setQuery]=useState("");
    const[searchParam]=useState(["nomenclatura"]);

    function searchTools(items){
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                );
            });
        });
    }

    useEffect(()=>{
        let filteredTools=searchTools(allTools);
        filterTools(filteredTools);
    },[query])

    return(
     <div className="search-tool">
                <label htmlFor="search-form">Buscar ferramenta:</label>
                <input 
                    type="search"
                    id="search-form"
                    name="search-form" 
                    placeholder="Search for..."
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
        </div>
    )
}

export default SearchBar;
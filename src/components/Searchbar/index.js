
import {useState} from "react"


const SearchBar=({searchTools})=>{
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
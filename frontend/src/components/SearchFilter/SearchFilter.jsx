import React, {useState, useEffect} from "react"

// const arrayFilters=["Mediterranean", "Gluten-Free", "Kosher"]

const SearchFilter = ({addFilter, recipes}) => {
  const [uniqueFilters, setUniqueFilters] = useState([])
    
const getFilters = ()=>{
  let tempArray = []
  recipes.map(recipe => tempArray.push(...recipe.recipe.healthLabels))
  let unique = [...new Set(tempArray)];
  setUniqueFilters(unique)
}

useEffect(()=>{
  getFilters()
},[])

  return (
    <div>
      {uniqueFilters.map((filter, index) =>(
        <div key={index}>
          <label htmlFor={filter}>{filter} </label>
          <br/>
          <input type="checkbox" name={filter}  value={filter}  onChange={addFilter}/>
          <br/>
        </div>
      ))}
    </div>
  )
}

export default SearchFilter
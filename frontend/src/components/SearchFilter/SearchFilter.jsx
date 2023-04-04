import React from "react"


const SearchFilter = ({handleFilter}) => {
    

  return (
    <div>
        <label htmlFor="Mediterranean"> Mediterranean
        <input type="checkbox" name="Mediterranean"  value="Mediterranean"  onChange={handleFilter}/>
        </label>
        <label htmlFor="Gluten-Free"> Gluten-Free
        <input type="checkbox" name="Gluten-Free"  value="Gluten-Free" onChange={handleFilter}/>
        </label>
        <label htmlFor="dairy"> Dairy
        <input type="checkbox" name="dairy" id="dairy" value="dairy" />
        </label>
        <label htmlFor="shellfish"> Shellfish
        <input type="checkbox" name="shellfish" id="shellfish" value="shellfish" />
        </label>
        <label htmlFor="peanuts"> Peanuts
        <input type="checkbox" name="peanuts" id="peanuts" value="peanuts" />
        </label>
    </div>
  )
}

export default SearchFilter
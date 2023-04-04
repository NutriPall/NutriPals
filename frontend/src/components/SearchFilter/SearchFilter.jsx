import React from "react"


const SearchFilter = (filter, handleFilter) => {
    

  return (
    <div>
        <label htmlFor="lunch/dinner"> Lunch/Dinner
        <input type="checkbox" name="lunch/dinner" id="lunch/dinner" />
        </label>
        <label htmlFor="breakfast"> Breakfast
        <input type="checkbox" name="breakfast" id="breakfast" />
        </label>
        <label htmlFor="snack"> Snack
        <input type="checkbox" name="snack" id="snack" />
        </label>
        <label htmlFor="vegetarian"> Vegetarian
        <input type="checkbox" name="vegetarian" id="vegetarian" />
        </label>
        <label htmlFor="vegan"> Vegan
        <input type="checkbox" name="vegan" id="vegan" />
        </label>
        <label htmlFor="dairy"> Dairy
        <input type="checkbox" name="dairy" id="dairy" />
        </label>
        <label htmlFor="shellfish"> Shellfish
        <input type="checkbox" name="shellfish" id="shellfish" />
        </label>
        <label htmlFor="peanuts"> Peanuts
        <input type="checkbox" name="peanuts" id="peanuts" />
        </label>
    </div>
  )
}

export default SearchFilter
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Resturant = () => {
    
    const[searchText1,setSearchText]=useState('');

    const[meals,setMeals]=useState([]);
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText1}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals));
    },[searchText1])

  const searchText =(e)=>{
      setSearchText(e.target.value);
  }
    return (
        <div>
            <h2>Find the food you want </h2>
            <input onChange={searchText}  type="text" />
            <br />
            <h3>result found :{meals.length}</h3>
            <div>
                {
                    meals.map(meali=><Meal
                    key={meali.idMeal}
                    meal={meali}

                    ></Meal>)
                }
            </div>
      <br />
      
        </div>
    );
};

export default Resturant;
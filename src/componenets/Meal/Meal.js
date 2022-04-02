import React from 'react';

const Meal = (props) => {
    const{idMeal,strMealThumb}=props.meal;
    console.log(props);
    return (
        <div>
            <h2>{idMeal}</h2>
            {/* <h1>tomce milake gerua{props.meali.strMeal} </h1> */}
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default Meal;
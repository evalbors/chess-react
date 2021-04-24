import React, {Component} from 'react'

class MyComponent extends Component{

    render(){
        let recipe = {
            name: 'Pizza',
            ingredients: ['Tomato', 'Mushroom', 'Cheese'],
            calories: 400
        };

        return (
            <React.Fragment>
                <h1>Recipe: {recipe.name}</h1>
                <hr />
                <p>Calories: {recipe.calories}</p> 
                <ol>
                    {
                        recipe.ingredients.map((ingredient,i) => {
                            console.log(ingredient);
                            return (
                                <li key={i}>
                                    {ingredient}
                                </li>
                            )
                        })
                    }
                </ol>
                
            </React.Fragment>
            
        );
    }
}

export default MyComponent;
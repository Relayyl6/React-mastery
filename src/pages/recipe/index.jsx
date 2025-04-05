import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/use-fetch";
import { use } from "react";
import useWindowResize from "../../hooks/use-window-resize";

// useLocalStorage
// usecounter
// useSesionStorage
// useId
// useOutsideClick

function RecipeList() {

    const location = useLocation();

    const {data, pending, errorMsg} = useFetch(
        'https://dummyjson.com/recipes'
    );

    const windowSize = useWindowResize()

    // console.log(data);

    if (pending) {
        return <h1>Fetching Recipes! please wait</h1>
    }
    
    
    

    return (
        <>
            <h1 style={{ color : windowSize.width < 768 ? 'red' : 'black'}}>Recipe list page</h1>
            <h3>Current window width is {windowSize.width} and the current window heigth is {windowSize.height}</h3>
            <ul>
                {
                    data?.recipes?.length > 0 ?
                    data?.recipes.map((recipeItem) =>
                        <div>
                            <img src={recipeItem?.image} style={{ maxWidth : '300px', textAlign : 'center' }}/>
                            <label>{recipeItem?.name}</label>
                        </div>
                    ) : null
                }
            </ul>
        </>
    )
}

export default RecipeList
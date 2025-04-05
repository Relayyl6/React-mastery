import { useParams } from "react-router-dom"
import useSWR from 'swr';

function RecipeDetailsPage() {

    const params = useParams()

    // console.log(params);
    const { id } = params;

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const {data, error, isLoading} = useSWR(`https://dummyjson.com/recipes/${id}`, fetcher)

    if (error) return <div>Faile to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div>
            <h1>Recipe details of recipe {id} is {data.name}</h1>
        </div>
    )
}

export default RecipeDetailsPage
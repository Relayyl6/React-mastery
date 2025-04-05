import { useEffect, useState } from "react";


function useFetch(url, options={}){
    
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    async function fetchData(){
        setPending(true)
        try {
            const apiResponse = await fetch(url, {...options})    
            // const result = await apiResponse.json()
            if (!apiResponse.ok) {
                throw new Error(apiResponse.statusText)
            }

            const result = await apiResponse.json();
            if (result) {
                setData(result)
                setErrorMsg(null)
                setPending(false)
            }
            
            // log
        } catch (error) {
            console.error(error);
            setPending(false)
            setErrorMsg(error)
        }

    }

    useEffect(() => {
        fetchData()
    },[url])

    return {
        data, 
        pending,
        errorMsg
    }
}

export default useFetch
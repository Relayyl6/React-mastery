import { useLayoutEffect, useState } from "react";


function useWindowResize() {

    const [windowSize, setwindowsSize] = useState(
        {
            width : 0,
            height : 0
        }
    )

    function handleResize() {
        setwindowsSize({
            width : window.innerWidth,
            height : window.innerHeight
        })
    }

    useLayoutEffect(() => {

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}

export default useWindowResize
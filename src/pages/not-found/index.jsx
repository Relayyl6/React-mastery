import { Link } from "react-router-dom"


function NotFoundPage() {

    return(
        <div>
            <h3>This page doesn't exist</h3>
            <Link to={'/home'}>
                Return to home page
            </Link>
        </div>
    )
}

export default NotFoundPage
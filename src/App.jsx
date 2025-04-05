import { Link, useNavigate, useRoutes } from "react-router-dom";
import CommentList from "./pages/comments/index.jsx";
import RecipeList from "./pages/recipe/index.jsx";
import RecipeDetailsPage from "./pages/recipe-details/index.jsx";
import NotFoundPage from "./pages/not-found/index.jsx";
import Layout from "./components/layout/index.jsx";
import Complaint from "./pages/complaint/index.jsx";
import { useState } from "react";
import ReactHookFormExamplePage from "./pages/react-hook-form-example/index.jsx";

function CustomRoutes() { 
  const [userId, setUserId] = useState(null);
  const element = useRoutes([
    {
      path : '/home', 
      element : <Layout />,
      children : [
        {
          path : 'recipe-list', 
          element : <RecipeList/>
        },
        {
          path : 'comments-list', 
          element : <CommentList/>
        },
        {
          path : 'recipe-list/:id', 
          element : <RecipeDetailsPage />
        }
      ]
    },
    {
      path : '*', element : <NotFoundPage />
    },
    {
      path : '/react-hook-form',
      element : <ReactHookFormExamplePage/>
    }
  ])
  return element;
}

function App() {

  const navigate = useNavigate();

  return (
    <>
      <div>
      {/* <h1>React routing, custom hooks and more</h1>
      <div>
        <Link to={'/home/recipe-list'}>
          Alternative way of navigating to recipe list page
        </Link>
      </div>

      <button onClick={() => {navigate('/home/recipe-list')}} style={{ backgroundColor : 'black', color : 'white' }}>
        Recipe List page
      </button>
      <button onClick={() => {navigate('/home/comments-list')}} style= {{ backgroundColor : 'black', color : 'white' }}>
        Comments List page
      </button> */}

      {/* <Routes>
        <Route path={"/home"} element={<Layout />}>
          <Route path="recipe-list" element={<RecipeList />}/>
          <Route path="comment-list" element={<CommentList />}/>
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes> */}

      {/* <RecipeList />
      <CommentList /> */}
      <CustomRoutes />
      </div>
    </>
  )
}

export default App

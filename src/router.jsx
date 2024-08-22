import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './Pages/Home/Home';
import Books from "./Pages/Browsebook/Books";
import AddBooks from "./Pages/Addbooks/AddBooks";
import BookDetail from "./Pages/Bookdetail/BookDetail";
const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/browsebook',
                element:<Books />
            },{
                path:'/addbooks',
                element:<AddBooks />
            },{
                path:'/books/:id',
                element:<BookDetail />
            }
        ]
    },
    
])

export default router;
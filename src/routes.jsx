import App from "./components/App";
import Profile from "./components/Home";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import ErrorPage from "./components/ErrorPage";


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/profile/:id",
                element: <Profile />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/favorites",
                element: <Favorites />
            }
        ]
    }
];

export default routes;
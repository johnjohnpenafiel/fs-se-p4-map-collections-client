import App from "./components/App";
import UserDashboard from "./components/UserDashboard";
import About from "./components/About";
import Login from "./components/Login";

const routes = [
    {
        path: "/",
        element: <App /> ,
        children: [
            {
                path: "/",
                element: <UserDashboard /> ,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login />,
            }
        ]
    },
  ];

  export default routes;
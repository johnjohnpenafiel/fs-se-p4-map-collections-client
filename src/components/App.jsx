import { useState, useEffect } from "react";
import { Outlet,Navigate, useNavigate} from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  
  const [user, setUser] = useState({});
  const navigate = useNavigate(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const login = () => {
  //   setIsLoggedIn(true)
  // }

  // const signout = () => {
  //   setIsLoggedIn(false)
  // }

  const logout = () => {
    fetch("https://localhost:4000/logout", {
    method: "DELETE",
    credentials: "include",
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return <p>Error logging out</p>;
      }
    })
  } 

  // useEffect() for check_session 
  useEffect(() => {
    fetch("http://localhost:4000/check_session", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return undefined;
        }
      })
      .then(setUser);
  }, []);


  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      navigate('/')
    };
  }, [user])

  return (
    <div>
      {user ? <NavBar logout={logout}  /> : <Navigate to="/login" />}
      <Outlet context={[setUser, login, user]}/>
    </div>
  );
}

export default App;

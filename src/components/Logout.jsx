import { useEffect } from "react";
import NavBar from "./NavBar";

export default function Logout() {

    
  useEffect(() => {
    fetch("https://localhost:4000/logout", {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return <p>Error logging out</p>;
      }
    }, []);
  });

  return (
    <div>
        <NavBar />
    </div>
  )
}

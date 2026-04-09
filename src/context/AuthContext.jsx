
import { useState, createContext } from "react";

export let Auth = createContext();

export let AuthProvider = ({children}) =>{

    const [registerUsers, setRegisterUsers] = useState(JSON.parse(
        localStorage.getItem('reg users')) || []
    );

        const [loggedInUser, setLoggedInUser] = useState(
        JSON.parse(localStorage.getItem("log user")) || null
    )  

    return <Auth.Provider
    value={{
      setLoggedInUser,
      setRegisterUsers,
      registerUsers,
      loggedInUser,
    }
}>
        {children}
    </Auth.Provider>
}

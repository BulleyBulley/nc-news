import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const RequiresLogin = ({ children }) => {
    
    const { isLoggedIn } = useContext(UserContext)
    return <div>{isLoggedIn && children}</div>
}

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    // console.log(user)

    const isLoggedIn = !!user;

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
};
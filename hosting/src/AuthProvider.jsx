import { createContext, useContext } from "react"

const AuthContext = createContext();

export function getAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
    const UserName = "Krishna";
    const UserId = "1234";
    const values = {
        UserName,
        UserId
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
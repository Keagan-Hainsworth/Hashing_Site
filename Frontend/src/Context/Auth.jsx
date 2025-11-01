import { createContext, useState } from "react";

const AuthSet = createContext({});

export const AuthProvider = ({ Sets }) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthSet.Provider value={{ auth, setAuth }}>
            {Sets}
        </AuthSet.Provider>
    );
}

export default AuthSet;
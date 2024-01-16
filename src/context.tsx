import {createContext, PropsWithChildren, useState} from "react";

const AuthContext = createContext({
    isAuth: true,
    login: () => {
    },
    logout: () => {
    }
});

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, login: () => setIsAuth(true), logout: () => setIsAuth(false)}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
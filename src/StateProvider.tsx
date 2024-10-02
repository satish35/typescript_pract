
import React from 'react'

interface ComplexObject{
    user: string;
    login(): void;
    logout(): void;
}

export const UserContext = React.createContext<ComplexObject | null>(null)
const { Provider} = UserContext;

export const StateProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = React.useState<string>('satish');

    const login = (): void =>{
        setUser('satish1');
    }

    const logout = (): void =>{
        setUser('satish2');
    }
    return (
        <Provider value={{user: user, login: login, logout: logout}}>
            {children}
        </Provider>
    )
}

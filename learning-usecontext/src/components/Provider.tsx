import { createContext, useState, type ReactNode } from "react";

export interface User {
    userName: string;
    password: string;
}

export const UserContext = createContext<User | null>(null);

export default function Provider({children}: {children: ReactNode}) {
    const [user] = useState<User | null>({userName: "ansariarif", password: "password@ansariarif"});

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
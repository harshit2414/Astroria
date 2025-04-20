import { createContext } from "react";
import { astrologers } from "../assets/assets";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const value = {
        astrologers
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

    )
}

export default AppContextProvider
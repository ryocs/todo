import React, { useContext } from "react";

export type globalContent = {
    listData: any[],
    setData?: any,
    searchValue?: string
}

export const GlobalContext = React.createContext<globalContent>({listData: []});

export const useGlobalContext = () => React.useContext(GlobalContext);
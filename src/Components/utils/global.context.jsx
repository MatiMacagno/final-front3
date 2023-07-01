import { createContext, useReducer, useState, useEffect, useContext } from "react";
import axios from 'axios'
import { themes } from "./theme";

const ContextGlobal = createContext();

const initialState = {
  dentistList: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
}

const initialTheme = themes.light

const dentistReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTIST_LIST':
      return { ...state, dentistList: [...action.payload] }
    case 'ADD_FAV':
      const favorites = state.favorites ? [...state.favorites, action.payload ] : [action.payload]
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { ...state, favorites }
      case 'REMOVE_FAV':
        const newFavorites = state.favorites.filter(dentist => dentist !== action.payload);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return { ...state, favorites: newFavorites };
  }
}

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_DARK":
      return themes.dark;
    case "SWITCH_LIGHT":
      return themes.light;
    default: 
      throw new Error();
  }
};

const Context = ({ children }) => {

  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialState)

  const [themeState, themeDispatch] = useReducer(themeReducer, initialTheme);

  const urlList = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(urlList)
      .then(res => dentistDispatch({ type: 'GET_DENTIST_LIST', payload: res.data }))
      .catch(err => console.log(err))
  }, [])

  return (
    <ContextGlobal.Provider value={{
      dentistState, dentistDispatch, themeState, themeDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};


export default Context;
export const useDentistStates = () => useContext(ContextGlobal)

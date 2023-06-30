import { createContext, useReducer, useState, useEffect, useContext } from "react";
import axios from 'axios'
import { THEME } from "./theme";

const ContextGlobal = createContext();

const initialState = {
  theme: THEME.LIGHT_THEME,
  dentistList: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
}

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
      case 'TOGGLE_THEME':
        return { ...state, theme: action.payload }
    }
}


const Context = ({ children }) => {

  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialState)

  const urlList = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(urlList)
      .then(res => dentistDispatch({ type: 'GET_DENTIST_LIST', payload: res.data }))
      .catch(err => console.log(err))
  }, [])

  return (
    <ContextGlobal.Provider value={{
      dentistState, dentistDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;
export const useDentistStates = () => useContext(ContextGlobal)

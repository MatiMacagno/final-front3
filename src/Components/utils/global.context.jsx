import { createContext, useReducer, useState, useEffect, useContext } from "react";
import axios from 'axios'

const ContextGlobal = createContext();

const initialState = {
  theme: "",
  dentistList: [],
  dentist: {},
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
}

const dentistReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, dentistList: action.payload }
    case 'GET_DENTIST':
      return { ...state, dentist: action.payload }
    case "ADD_FAVORITES":
      return { ...state, favorites: [ ...state.favorites, action.payload ] }
    default:
      throw new Error()
  }
}

const Context = ({ children }) => {

  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialState)

  const urlList = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(urlList)
      .then(res => dentistDispatch({ type: 'GET_LIST', payload: res.data }))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(dentistState.favorites))
  }, [dentistState.favorites])

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

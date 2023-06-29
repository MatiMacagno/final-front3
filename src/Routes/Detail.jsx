import React, {useEffect} from 'react'
import { useDentistStates } from '../Components/utils/global.context'
import axios from 'axios'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {dentistState, dentistDispatch} = useDentistStates()
  const params = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id

  useEffect(() => {
    axios(url)
    .then(res => dentistDispatch({type:'GET_DENTIST', payload: res.data }))
  }, [])

  return (
    <>
      <div>
        <h1>{dentistState.dentist.name}</h1>
        <h2>{dentistState.dentist.email}</h2>
        <h2>{dentistState.dentist.phone}</h2>
        <h2>{dentistState.dentist.website}</h2>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail
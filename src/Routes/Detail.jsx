import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDentistStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { themeState } = useDentistStates();

  const [dentist, setDentist] = useState({});

  const { id } = useParams();
  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(url)
    .then(res => (setDentist(res.data)))
  }, [])

  return (
      <div className={themeState.className}>
        <h1>{dentist.name}</h1>
        <h2>{dentist.username}</h2>
        <h2>{dentist.email}</h2>
        <h2>{dentist.phone}</h2>
        <h2>{dentist.website}</h2>
      </div>
  )
}

export default Detail
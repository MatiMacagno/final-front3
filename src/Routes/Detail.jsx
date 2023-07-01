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
        <main className={themeState.className}>
          <h1>Dentist Detail</h1>
          <tr>
            <th><h2>{dentist.name}</h2></th>
            <th><h2>{dentist.username}</h2></th>
            <th><h2>{dentist.email}</h2></th>
            <th><h2>{dentist.phone}</h2></th>
            <th><h2>{dentist.website}</h2></th>
          </tr>
        </main>
  )
}

export default Detail
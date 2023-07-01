import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { dentistState, themeState } = useDentistStates()

  return (
    <main className={themeState.className}>
      <h1>Dentists</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistState.dentistList.map( dentist => <Card key={dentist.id} dentist={dentist}></Card>)}
      </div>
    </main>
  )
}

export default Home
import React from 'react'
import Form from '../Components/Form'
import { useDentistStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { themeState } = useDentistStates();

  return (
    <div className={themeState.className} >
      <div className="form-title">
        <h1>Want to know more?</h1>
        <h2>Send us your questions and we will contact you</h2>
      </div>
      <Form/>
    </div>
  )
}

export default Contact
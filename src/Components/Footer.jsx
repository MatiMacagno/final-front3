import React from 'react'
import { useDentistStates } from '../Components/utils/global.context'

const Footer = () => {

  const {themeState} = useDentistStates()
  return (
    <footer className={themeState.className}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo'/>
    </footer>
  )
}

export default Footer

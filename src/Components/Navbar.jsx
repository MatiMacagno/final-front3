import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/routes'
import { useDentistStates } from '../Components/utils/global.context'
import { THEME } from './utils/theme'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { dentistState, dentistDispatch } = useDentistStates()

  const changeTheme = () => {
    dentistDispatch({type: 'TOGGLE_THEME', payload: dentistState.theme === THEME.LIGHT_THEME ? THEME.DARK_THEME : THEME.LIGHT_THEME })
  }
  

  return (
    <nav style={dentistState.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to={routes.home}><img src="././images/DH.png" alt='DH-logo' /></Link>
      </div>
      <div>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.favs}>Favs</Link>
        <Link to={routes.contact}>Contact</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={changeTheme}>Change theme</button>
      </div>

    </nav>
  )
}

export default Navbar
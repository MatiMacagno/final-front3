import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/routes'
import { useDentistStates } from '../Components/utils/global.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { themes } from './utils/theme'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { themeState, themeDispatch } = useDentistStates()

  

  const changeTheme = () => {
    if(themeState.theme) {
      themeDispatch({type: 'SWITCH_LIGHT'})
    } else {
      themeDispatch({type: 'SWITCH_DARK'})
    }
  }
  

  return (
    <nav className={themeState.className}>
      
        
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          <div>
            <Link to={routes.home}><img src="././images/DH.png" alt='DH-logo' /></Link>
          </div>
          <div>
            <Link className='link' to={routes.home}>Home</Link>
            <Link className='link' to={routes.favs}>Favs</Link>
            <Link className='link' to={routes.contact}>Contact</Link>
            {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
            <button onClick={changeTheme} className='changeTheme'><FontAwesomeIcon icon={themeState === themes.light ? faMoon : faSun } /></button>
          </div>
    </nav>
  )
}

export default Navbar
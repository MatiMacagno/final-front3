import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/routes'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to={routes.home}><img src="././public/images/DH.png" alt='DH-logo' /></Link>
      </div>
      <div>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.favs}>Favs</Link>
        <Link to={routes.contact}>Contact</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>Change theme</button>
      </div>

    </nav>
  )
}

export default Navbar
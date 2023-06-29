import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from '../Components/utils/global.context'

const Card = ({ dentist, name, username, id }) => {

  const { dentistState, dentistDispatch } = useDentistStates()



  const addFavs = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    
      dentistDispatch({ type: 'ADD_FAVORITES', payload: dentist })
    }
    
    
   
  

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
          <Link to={"/dentist/" + id}>
            <img src="././public/images/doctor.jpg" alt="doctor"/>
            <h1>{name}</h1>
            <h2>{username}</h2>
          </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFavs} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from '../Components/utils/global.context'

const Card = (props) => {

  const { dentistState, dentistDispatch } = useDentistStates();

  const favorites = dentistState.favorites
  const dentistFav = favorites.find((dentist) => dentist.id === props.dentist.id)

  const addFavs = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if(!dentistFav) {
      dentistDispatch({ type: 'ADD_FAV', payload: props.dentist })
    } else {
      alert("El dentista ya esta agregado a favoritos")
    }
  }

  const removeFavs = () => {
    dentistDispatch({type: 'REMOVE_FAV', payload:props.dentist })
  }
   
  return (
    <div style={dentistState.theme}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="card">
            <Link to={"/dentist/" + props.dentist.id}>
              <img src="/images/doctor.jpg" alt="doctor"/>
              <h1>{props.dentist.name}</h1>
              <h2>{props.dentist.username}</h2>
            </Link>
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <div style={{display: 'flex'}}>
            <button onClick={addFavs} className="favButton">⭐</button>
            <button onClick={removeFavs} className="favButton">💔</button>
          </div>
        </div>
    </div>
  );
};

export default Card;
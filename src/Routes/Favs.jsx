import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { dentistState, themeState } = useDentistStates()

  const dentistFavs = dentistState?.favorites || []

  return (
    <div className={themeState.className}>
      <h1>Favorites</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentistFavs.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </div>
  );
};

export default Favs;

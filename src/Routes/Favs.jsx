import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favorites = JSON.parse(localStorage.getItem('favorites'))

  console.log(favorites)


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map(dentist => <Card key={dentist.id} name={dentist.name} username={dentist.username}></Card>)}
      </div>
    </>
  );
};

export default Favs;

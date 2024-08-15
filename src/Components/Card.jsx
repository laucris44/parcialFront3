import React from 'react';
import '../App.css';

const Card = ({ name, mascota }) => {
  return (
    <div className="card">
      <p>Hola {name}!</p>
      <p>Sabemos que el nombre de tu mascota es:</p>
      
      <p>{mascota}</p>
    </div>
  );
};

export default Card;

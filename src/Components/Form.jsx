import React, { useState } from 'react';
import Card from './Card';
import '../App.css';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [mascota, setMascota] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleMascotaChange = (e) => setMascota(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validations
    if (name.length < 3 || name.trim().length === 0 || mascota.length < 6) {
      setError(true);
      setSubmitted(false);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Nombre Mascota</h2>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Ingresa el nombre de tu mascota"
          value={mascota}
          onChange={handleMascotaChange}
        />
        <button type="submit">ENVIAR</button>
      </form>
      {error && <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta.</p>}
      {submitted && <Card name={name} mascota={mascota} />}
    </div>
  );
};

export default FormComponent;

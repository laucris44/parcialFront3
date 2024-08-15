import Card from "./Components/Card";
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      <h6>El nombre debe contener al menos 3 caracteres</h6>
      <h6>El nombre de tu mascota debe contener al menos 6 caracteres</h6>
    </div>
  );
}

export default App;
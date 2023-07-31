import './App.css';
import Card from "./Components/Card";
import vehicles from './data/vehicles';
//import ShowHide from './Components/ShowHide';

function App() {
  const vehiculesList = vehicles.map( (x) => {
    return <Card title={x.name} description={x.description}/>;
  });

  return (
    <>
      <div className="app">
        <h1>Hola React</h1>
        <div className="container"> 
          {vehiculesList}
        </div>
      </div>
    </>
  )
}

export default App

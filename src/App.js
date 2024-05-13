import './App.css';
import FormIngreso from './components/FormIngreso';
import ListadoComponentes from './components/ListadoValores';
import {useState} from 'react';
function App() {
  let tem = [];
  const [listaPersonas, setListaPersonas] = useState([]);

  async function solicitarRandoms(){
    console.log("click");
    let url_base = "https://randomuser.me/api/";
    let cantRandom = document.getElementById("cantRandom").value;
    let url_final = url_base+"?results="+cantRandom; 
    
    const response = await fetch(url_final);
    const data = await response.json();
    console.log(data);  
    setListaPersonas([
      ...data.results
    ]);  
  }
  return(
    <>
      <h1>Uso de API para generar randoms</h1>
      <FormIngreso handlerClick={solicitarRandoms}/>
      <ListadoComponentes personas={listaPersonas}/>
    </>
  );
}
export default App;

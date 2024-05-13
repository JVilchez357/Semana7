import './App.css';
import FormIngreso from './components/FormIngreso';
import ListadoComponentes from './components/ListadoValores';
function App() {
  let tem = [23,43,5,6];
  function solicitarRandoms(){
    console.log("click");
    let url_base = "http://www.randomnumberapi.com/api/v1.0/";
    let numMin = document.getElementById("numMin").value;
    let numMax = document.getElementById("numMax").value;
    let cantRandom = document.getElementById("cantRandom").value;
    let url_final = url_base + "random?min="+numMin+"&max="+numMax+"&count="+cantRandom; 
    console.log(url_final);
    fetch(url_final)
      .then(function(response){
        if(response.ok){
          throw Error("Ocurrio un error: "+response.status.Text);
        }
      })
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);
      })
      .catch(function(err){
        console.log("Ocurrio un error: "+err);
      });
  }
  return(
    <>
      <h1>Uso de API para generar randoms</h1>
      <FormIngreso handlerClick={solicitarRandoms}/>
      <ListadoComponentes numeros={tem}/>
    </>
  );
}
export default App;

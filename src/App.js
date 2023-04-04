
import ItemList from "./componentes/ItemList/ItemList";
import {Navbar} from "./componentes/Navbar/Navbar" //Importamos del archivo .jsx, si tuviesemos más de un export lo ponemos con "," dentro de {}

let saludo = "Hola, qué tal?";
function App() { 
 
  return (                    //Llamamos a los componentes con la etiqueta </>
    <div className="App"> 
      <Navbar />
      <ItemList saludo={saludo}/>
    </div>
  );
}
//Le pasamos propiedades de objeto al componente y lo llamamos en el archivo .jsx con {props}
export default App;

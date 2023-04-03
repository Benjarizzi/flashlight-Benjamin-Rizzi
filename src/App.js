import './App.css';
import {Footer} from "./componentes/Footer"
import {Main} from "./componentes/Home"
import {Navbar} from "./componentes/Navbar" //Importamos del archivo .jsx, si tuviesemos más de un export lo ponemos con "," dentro de {}


function App() { 
 
  return (                    //Llamamos a los componentes con la etiqueta </>
    <div className="App"> 
      <Navbar /> 
    </div>
  );
}
//Le pasamos propiedades de objeto al componente y lo llamamos en el archivo .jsx con {props}
export default App;

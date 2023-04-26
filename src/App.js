
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import {Navbar} from "./componentes/Navbar/Navbar" //Importamos del archivo .jsx, si tuviesemos más de un export lo ponemos con "," dentro de {}


function App() { 
 
  return (                    //Llamamos a los componentes con la etiqueta </>
    <div className="App"> 
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}
//Le pasamos propiedades de objeto al componente y lo llamamos en el archivo .jsx con {props}
export default App;

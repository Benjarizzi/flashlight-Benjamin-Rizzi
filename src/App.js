
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import {Navbar} from "./componentes/Navbar/Navbar" //Importamos del archivo .jsx, si tuviesemos más de un export lo ponemos con "," dentro de {}
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() { 
 
  return (                    //Llamamos a los componentes con la etiqueta </>
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route element={ <Navbar/> }> /**la route de Navbar envuelve a las otras route para que nunca se deje de mostrar */
            <Route path="/" element={  <ItemListContainer />  }/>
            <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } /> /**en el path ponemos /ItemDetail/: el /: es para hacer una ruta dinamica */
            <Route path="*" element={<h1>404 not found</h1>}/>
          </Route>

        </Routes>

       </BrowserRouter>

    </div>
  );
}
//Le pasamos propiedades de objeto al componente y lo llamamos en el archivo .jsx con {props}
export default App;

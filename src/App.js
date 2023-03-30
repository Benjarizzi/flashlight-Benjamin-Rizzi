import './App.css';
import {Footer} from "./Footer"
import {Main} from "./Home"
import {Navbar} from "./Navbar" //Importamos del archivo .jsx, si tuviesemos más de un export lo ponemos con "," dentro de {}


function App() { 
 
  return (                    //Llamamos a los componentes con la etiqueta </>
    <div className="App"> 
      <Navbar /> 
      <Main />
      <Footer />
    </div>
  );
}

export default App;

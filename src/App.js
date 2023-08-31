
import ReservaAnio from "./Componentes/ReservaAnio";
import ReservaAnioComboBox from "./Componentes/ReservaAnioComboBox";
import UsuariosCatComboBox from "./Componentes/UsuariosCatComboBox";


function App() {
  return (
    <div className="container">
      <UsuariosCatComboBox />
      <ReservaAnioComboBox />
      <ReservaAnio />
      
    </div>
  );
}

export default App;

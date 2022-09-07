import logo from './logo.svg';
import './App.css';
import './styles.css';
import { Cabecalho } from './Components/Cabecalho/';
import { Menu } from './Components/Menu/';
import { Corpo } from './Components/Corpo';

function App() {
  return (
    <>
      <div>
        <Cabecalho />
        <Menu />
        <Corpo />
      </div>
    </>
  );
}

export default App;

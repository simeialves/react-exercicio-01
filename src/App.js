import logo from './logo.svg';
import './App.css';
import "./styles.css";
import { Cabecalho } from './components/Cabecalho';
import { Menu } from './components/Menu';
import { Artigo } from './components/Artigo';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <div>
        <header>
          <Cabecalho></Cabecalho>
        </header>
        <section>
          <Menu />
        </section>
        <section>
          <Artigo />
        </section>
        <section>
          <Sidebar />
        </section>
      </div>
    </>
  );
}

export default App;

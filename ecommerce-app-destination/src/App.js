import logo from './logo.svg';
import './App.css';
import Header from './Componants/Headers/Header';
// import Footer from './Componants/Footer/Footer';
import MainRoute from './Pages/MainRoute';
import { Footer } from './Componants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainRoute/>
      <Footer/>
    </div>
  );
}

export default App;

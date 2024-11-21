import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Routing from './Routing/Routing';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;

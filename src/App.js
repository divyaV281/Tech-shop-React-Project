import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Routing from './Routing/Routing';
import Footer from './Components/Footer';
import Advantages from './Components/Advantages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routing />
      <Advantages />
      <Footer />
    </div>
  );
}

export default App;

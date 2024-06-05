import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Key from './Components/Key';
import Metrices from './Components/Metrices';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Components/Footer';
import Grow from './Components/Grow';
import Customer from './Components/Customer';
import ProblemTarget from './Components/ProblemTarget';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Key/>
      <Metrices/>
      <Customer/>
      <ProblemTarget/>
      <Grow/>
      <Footer/>
    </div>
  );
}

export default App;

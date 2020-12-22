import './App.css';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';
import Beginner from './component/Beginner';
import Intermediate from "./component/Intermediate"
import Advanced from "./component/Advanced"


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Advanced />
      <Footer />
    </div>
  );
}

export default App;

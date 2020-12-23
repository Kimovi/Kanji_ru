import './App.css';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Advanced from './component/Advanced'
import Beginner from "./component/Beginner"
import Intermediate from "./component/Intermediate"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/beginner" exact component={Beginner} />
        <Route path="/intermediate" exact component={Intermediate} />
        <Route path="/advanced" exact component={Advanced} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import KanjiList from './component/KanjiList';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <KanjiList />
      <Footer />
    </div>
  );
}

export default App;

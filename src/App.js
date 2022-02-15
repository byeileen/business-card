import './App.css';
import Info from './components/info';
import AboutMe from './components/about'
import Interests from './components/interests'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Info />
      <AboutMe />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;

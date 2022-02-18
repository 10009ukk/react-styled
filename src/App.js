import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import About from './router/About';
import Home from './router/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about/" element={<About />}/>
      </Routes>
    </>    
  );
}

export default App;

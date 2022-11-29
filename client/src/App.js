import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App(props) {

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Home user={"James O'Leary"}/>} />
        </Routes>
      </Router>
    </div>
  );
}

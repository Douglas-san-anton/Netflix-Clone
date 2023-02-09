import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Browse } from './pages/browse/Browse';

function App() {

  return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/browse' element={<Browse />}/>
        </Routes>
      </Router>
  )
}

export default App;

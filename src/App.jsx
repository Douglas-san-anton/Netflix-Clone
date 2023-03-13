import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Browse } from './pages/browse/Browse';
import { DataShare } from './context/DataContext';

function App() {

  return (
    <Router>
      <DataShare>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/browse' element={<Browse />} />
        </Routes>
      </DataShare>
    </Router>
  )
}

export default App;

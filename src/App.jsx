import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { DashboardPage } from './modules/dashboard/pages/DashboardPage';
import { LoginPage } from './modules/auth/pages/LoginPage';
import { Home } from './modules/auth/pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </Router>
);

export default App;

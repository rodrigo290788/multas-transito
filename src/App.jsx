import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { DashboardPage } from './modules/dashboard/pages/DashboardPage';
import { LoginPage } from './modules/auth/pages/LoginPage';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  </Router>
);

export default App;

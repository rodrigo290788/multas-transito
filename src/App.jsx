import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { DashboardPage } from './modules/dashboard/pages/DashboardPage';
import { MinutesPage } from './modules/minutes/pages/MinutesPage';
import { LoginPage } from './modules/auth/pages/LoginPage';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/minutes' element={<MinutesPage />} />
    </Routes>
  </Router>
);

export default App;

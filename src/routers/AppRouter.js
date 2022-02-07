import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Routes>

          <Route path='login' element={<PublicRoutes isAuthenticated={user.logged} />} />
          <Route path='*' element={<PrivateRoutes isAuthenticated={user.logged} />} />
          {/* Version del cruso con router v5
          <Route
            path="*"
            element={<DashboardRoutes />}
            isAuthenticated={user.logged}
          /> */}
        </Routes>
      </div>
    </Router>
  );
};

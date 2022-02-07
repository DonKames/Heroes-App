import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';

export const PublicRoutes = ({ isAuthenticated }) => {
  return ( isAuthenticated ? <Navigate to='/'/> : <LoginScreen /> );
};

PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}
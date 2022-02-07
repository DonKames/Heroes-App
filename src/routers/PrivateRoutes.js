import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';

export const PrivateRoutes = ({ isAuthenticated }) => {

    const location = useLocation();

    localStorage.setItem('lastPath', location.pathname )
    
    return (

        isAuthenticated ? <DashboardRoutes /> : <LoginScreen />

        // //Esta es la version del curso v5
        // <Route {...rest}
        //     element={ (props) => (
        //         console.log(Element)
        //         (isAuthenticated)
        //             ? (<Element {...props} />)
        //             : (<Navigate to='/login' />)
        //     )}
        // />
    )
};

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}
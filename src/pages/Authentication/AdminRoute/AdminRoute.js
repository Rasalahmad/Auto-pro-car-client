import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, admin} = useFirebase();
    if(isLoading){
        return <CircularProgress />
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;
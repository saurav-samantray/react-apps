import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

  const RouteWithLayout = props => {
  const { layout: Layout, component: Component,path, ...rest } = props;
  const isLoggedIn = localStorage.getItem('token') ? true : false;
  //console(path)
  if (isLoggedIn && path=='/sign-in'){
    return (
      <Route
        {...rest}
        render={matchProps => (
            <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
        )}
      />
    );
  } else if (isLoggedIn || path=='/sign-in'){
    return (
      <Route
        {...rest}
        render={matchProps => (
            <Layout><Component {...matchProps} /></Layout>
        )}
      />
    );
  }else{
    return (
      <Route
        {...rest}
        render={matchProps => (
            <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} /> 
        )}
      />
    );
  }

  

};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;

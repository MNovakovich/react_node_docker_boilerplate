import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, loading, ...rest }) => {
    return(
        <Route {...rest} render={(props) => (
            auth  ?
                <Component {...props} />
                : 
                <Redirect to='/login' />
            )} />
    )}

    PrivateRoute.propTypes = {
    auth: PropTypes.bool.isRequired
};

const mapStateToProps = state =>({
    auth: true, //state.auth.isAuthenticated,
    loading: false //state.auth.loading,
});
export default connect(mapStateToProps)(PrivateRoute);


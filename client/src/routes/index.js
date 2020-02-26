import React,{ Fragment} from 'react';
import {  Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import routes from './routes';

export default  () => {
    
    return (
        <Fragment>
            {
                routes.map((route, key) => {
                    if(route.protected) {
                       return <PrivateRoute key={key} exact path={route.path} component={route.component} />
                    }
                    return <Route exact key={key} path={route.path} component={route.component} />
                })
            }
        </Fragment>
    )
};


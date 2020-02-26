import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider }  from 'react-redux';
import store from './store';

import Routes from './routes/index';

//import '../style.css';

 const App = () => {
    return (
      <Provider store={store} >
   
          <div className="example">
          <Router>
              <Switch>
                 <Routes />
              </Switch>
          </Router>
          test
          </div>
        </Provider>
    )
}
export default App;
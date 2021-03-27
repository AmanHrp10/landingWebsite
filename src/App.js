import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Beranda from './pages/beranda/index';
import List from './pages/list/index';
import Daily from './pages/daily/index';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getUser } from './redux/action';

function App() {
  useEffect(() => {
    store.dispatch(getUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Beranda} />
          <Route exact path='/list' component={List} />
          <Route exact path='/daily' component={Daily} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

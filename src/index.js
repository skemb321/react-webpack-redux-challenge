import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import UserDropdown from './containers/user-dropdown';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Aurity Challenge!</h1>
          <UserDropdown />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);

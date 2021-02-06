import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './index.scss';

const StylesPage = React.lazy(() => import('./pages/styles'));
const ComponentPage = React.lazy(() => import('./pages/components'));

const Demo: React.FC = () => {
  return (
    <div className="demo-wrapper">
      <div className="demo-wrapper__menu-wrapper">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action active">
            Cras justo odio
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Dapibus ac facilisis in
          </a>
        </div>
      </div>
      <div className="demo-wrapper__content">
        <Router>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/components" component={ComponentPage} />
              <Route path="/styles" component={StylesPage} />
              <Redirect from="/" to="/styles" exact={true} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('demo'));

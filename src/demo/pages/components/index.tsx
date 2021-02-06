import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

const ModalPage = React.lazy(() => import('./modal'));

const ComponentsPage: React.FC = () => {
  return (
    <div>
      <h1>Components</h1>
      <Suspense fallback={null}>
        <Route path="/components/modal" component={ModalPage} />
        <Redirect from="/components" to="/components/modal" />
      </Suspense>
    </div>
  );
};

export default ComponentsPage;

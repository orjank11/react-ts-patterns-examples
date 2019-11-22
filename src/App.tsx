import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
const SuspensePage = lazy(() => import("./pages/SuspensePage"));
const HooksPage = lazy(() => import("./pages/HooksPage"));
const RenderPropsPage = lazy(() => import("./pages/RenderPropsPage"));
const ReduxPage = lazy(() => import("./pages/ReduxPage"));
import store from "./redux";

const AppRouter = () => (
  <BrowserRouter>
    <nav>
      <Link to="/suspense">Suspense</Link><br />
      <Link to="/hooks">Hooks</Link><br />
      <Link to="/render-props">RenderPropsPage</Link><br />
      <Link to="/redux">Redux</Link>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/suspense" component={SuspensePage} />
        <Route path="/hooks" component={HooksPage} />
        <Route path="/render-props" component={RenderPropsPage} />
        <Route path="/redux" component={ReduxPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

const App: React.FC = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;

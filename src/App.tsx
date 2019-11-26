import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux";
import { Navbar, NavItem } from './ui/Nav';
import Spinner from './ui/Spinner';


const HighOrderComponentPage = lazy(() => import('./pages/HighOrderComponentPage'));
const SuspensePage = lazy(() => import("./pages/SuspensePage"));
const HooksPage = lazy(() => import("./pages/HooksPage"));
const RenderPropsPage = lazy(() => import("./pages/RenderPropsPage"));
const ReduxPage = lazy(() => import("./pages/ReduxPage"));

const activeStyle: React.CSSProperties = {
  backgroundColor: "#f2f3f9",
  color: "tomato",
};

const isActive = (navPath: string, thisPath: string) => navPath === thisPath;

const AppRouter = (props: any) => {
  return (
  <BrowserRouter>
    <Navbar>
      <NavItem 
        isActive={(_, location) => isActive('/suspense', location.pathname)} 
        activeStyle={activeStyle} 
        to="/suspense"
      >
        Suspense
      </NavItem>
      <NavItem 
        isActive={(_, location) => isActive('/hooks', location.pathname)} 
        activeStyle={activeStyle} 
        to="/hooks"
      >
        Hooks
      </NavItem>
      <NavItem 
        isActive={(_, location) => isActive('/render-props', location.pathname)} 
        activeStyle={activeStyle} 
        to="/render-props"
      >
        RenderProps
      </NavItem>
      <NavItem 
        isActive={(_, location) => isActive('/redux', location.pathname)} 
        activeStyle={activeStyle} 
        to="/redux"
      >
        Redux
      </NavItem>
      <NavItem 
        isActive={(_, location) => isActive('/highorder', location.pathname)} 
        activeStyle={activeStyle} 
        to="/highorder">HighOrder</NavItem>
    </Navbar>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/suspense" component={SuspensePage} />
        <Route path="/hooks" component={HooksPage} />
        <Route path="/render-props" component={RenderPropsPage} />
        <Route path="/redux" component={ReduxPage} />
        <Route path="/highorder" component={HighOrderComponentPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)};

const App: React.FC = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;

import React, { Suspense, useMemo } from "react";
import useRoutes from "hooks/useRoutes";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

const AuthWrapper = ({
  needsAuth,
  children,
}: {
  needsAuth: boolean;
  children: JSX.Element;
}) =>
  useMemo(
    () =>
      needsAuth ? (
        <AmplifyAuthenticator>{children}</AmplifyAuthenticator>
      ) : (
        children
      ),
    [children, needsAuth]
  );

const App = () => {
  const routes = useRoutes();
  return (
    <Router>
      <nav>
        {routes.map(({ path, name }) => (
          <Link key={path} to={path}>
            {name}
          </Link>
        ))}
      </nav>
      <Switch>
        {routes.map(({ path, Component, needsAuth }) => (
          <Route key={path} exact path={path}>
            <AuthWrapper needsAuth={needsAuth}>
              <Suspense fallback={<p>Loading...</p>}>
                <Component />
              </Suspense>
            </AuthWrapper>
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;

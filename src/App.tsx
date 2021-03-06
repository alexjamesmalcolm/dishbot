import React, { Suspense, useMemo } from "react";
import useRoutes from "hooks/useRoutes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Authenticator from "components/Authenticator";

const AuthWrapper = ({
  needsAuth,
  children,
}: {
  needsAuth: boolean;
  children: JSX.Element;
}) =>
  useMemo(
    () => (needsAuth ? <Authenticator>{children}</Authenticator> : children),
    [children, needsAuth]
  );

const App = () => {
  const routes = useRoutes();
  return (
    <Router>
      <nav>
        {routes
          .filter((route) => route.isInNav)
          .map(({ path, name }) => (
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
                <main>
                  <Component />
                </main>
              </Suspense>
            </AuthWrapper>
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;

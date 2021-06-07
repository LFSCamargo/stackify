import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: any;
  location?: any;
  path: string;
  exact?: boolean;
  isLogged: boolean;
  redirectRoute: string;
}

const PrivateRoute: FC<Props> = ({
  component: Component,
  isLogged,
  redirectRoute,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props): JSX.Element =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectRoute,
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

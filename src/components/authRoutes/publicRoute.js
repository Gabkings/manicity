import React from "react";
import { Route, Redirect } from "react-router-dom";

function PublicRoute({ user, component: Comp, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        rest.restricted ? (
          user ? (
            <Redirect to="/dashbaord" />
          ) : (
            <Comp user={user} {...props} />
          )
        ) : (
          <Comp user={user} {...props} />
        )
      }
    />
  );
}

export default PublicRoute;

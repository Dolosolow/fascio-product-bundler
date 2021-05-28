import { Switch, Route } from "react-router-dom";

import GrupCart from "src/pages/GrupCart";

const Routes = (props: { children?: React.ReactNode }) => {
  return (
    <Switch>
      <Route path="/bundle/:id/cart" component={GrupCart} />
      <Route path="/bundle/:id" render={() => props.children} />
    </Switch>
  );
};

export default Routes;

import { Switch, Route } from 'react-router-dom';

import BuilderPanel from 'src/pages/BuilderPanel';
import BundlePage from 'src/pages/BundlePage';
import FormReview from 'src/pages/FormReview';
import GrupPanel from 'src/pages/GrupPanel';
import MultiPageForm from 'src/components/MultPageForm';
import NewProducts from 'src/pages/NewProducts';

import { initialSchemeState } from 'src/contexts/schemeContext';
import { BuilderValidationSchema } from 'src/utils/yupValidations';

const multiFormPages = [<BuilderPanel />, <NewProducts />, <FormReview />];

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/page/new"
        component={() => (
          <MultiPageForm
            formPages={multiFormPages}
            initialFormValues={initialSchemeState}
            validationSchema={BuilderValidationSchema}
          />
        )}
      />
      <Route path="/bundle/:id" component={BundlePage} />
      <Route path="/" component={GrupPanel} />
    </Switch>
  );
};

export default Routes;

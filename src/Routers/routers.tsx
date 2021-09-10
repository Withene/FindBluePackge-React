import { Switch, Route, RouteProps } from 'react-router-dom';
import { useHistory } from 'react-router';
import { FindYour } from '../template/Find';
import { GlobalContext } from '../contexts/AuthContex';
import { useContext } from 'react';
import { ResultFind } from '../template/Result';
import { Page404 } from '../template/404';
export interface tes extends RouteProps {
  isPrivate?: boolean;
}
function CustomRouter({ isPrivate, ...rest }: tes) {
  const history = useHistory();
  const { have } = useContext(GlobalContext);

  if (!have && isPrivate) {
    history.push('/');
  }
  return <Route {...rest} />;
}
export function Routers(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={FindYour} />
      <CustomRouter path="/result" isPrivate exact component={ResultFind} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}

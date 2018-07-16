import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router';
import './App.css';
import Game from './components/Game';
import GameComplete from './components/GameComplete';
import GameStart from './components/GameStart';
import { RouterStore } from 'mobx-react-router';

// tslint:disable-next-line:interface-name
interface IAppProps extends RouteComponentProps<any> {
  routing?: RouterStore
}

@inject("routing")
@observer
class App extends React.Component<IAppProps> { 
  public  render() {
  
    return (
      <div>
        <Switch>
          <Route path='/' exact={true} component={GameStart} />
          <Route path='/game'  component={Game} />
          <Route path='/complete'  component={GameComplete} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

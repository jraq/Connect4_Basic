import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Container } from 'reactstrap';
import './App.css';
import Game from './components/Game';
import GameComplete from './components/GameComplete';
import GameStart from './components/GameStart';

interface IAppProps {
  routing?: RouterStore 
}

@inject("routing")
@observer
class App extends React.Component<IAppProps> { 
  public  render() {
  
    return (
      <Container>
        <Switch>
          <Route path='/' exact={true} component={GameStart} />
          <Route path='/game'  component={Game} />
          <Route path='/complete'  component={GameComplete} />
        </Switch>
      </Container>
    );
  }
}

export default App;

import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IGameProps } from './interfaces';

@observer
@inject("game", "routing")
class Game extends React.Component<IGameProps> {
    public render() {
        return (
          <span>Game</span>
        );
    }
}

export default Game;
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IGameCompleteProps } from './interfaces';


@observer
@inject("game", "routing")
class Game extends React.Component<IGameCompleteProps> {
    public render() {
        return (
          <span>Game Complete</span>
        );
    }
}

export default Game;
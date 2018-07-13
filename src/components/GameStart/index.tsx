import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IGameStartProps } from './interfaces';

@observer
@inject("game", "routing")
class GameStart extends React.Component<IGameStartProps> {
    public render() {
        return (
          <span>Game Start</span>
        );
    }
}

export default GameStart;
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IGameCompleteProps } from './interfaces';
import {Container, Row, Col, Button} from 'reactstrap';



@inject("game", "routing")
@observer
class Game extends React.Component<IGameCompleteProps> {
    public startOver = () =>{
        const { routing, game } = this.props;
        routing.push("/");
        game.endGame();
    }
    public componentDidMount() {
        const { routing , game} = this.props;
        
        if (!game.playing) {
            routing.push("/");
        }
    }

    public render() {
        const {game} = this.props;

        return (
            <Container>
            <Row className="text-center">
                <Col>
                    {game.game.winningPlayer === "Computer" && <h3>Better Luck Next Time: {game.game.winningPlayer}!</h3>}
                    {game.game.winningPlayer === "Player" && <h3>Winner: {game.game.winningPlayer}!</h3>}
                    {game.game.winningPlayer === "Draw" && <h3>Draw!</h3>}
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Button onClick={this.startOver} color="primary">StartOver</Button>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Game;
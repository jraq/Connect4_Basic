import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import { IGameStartProps } from './interfaces';


@inject("game", "routing")
@observer
class GameStart extends React.Component<IGameStartProps> {
    public playerStart = () =>{
        const { routing, game} = this.props;
        if(routing !== undefined && game !== undefined){
            game.startGame("Player");
            routing.push("/game");
        }
    }
    public computerStart = ()=> {
        const { routing, game} = this.props;
        if(routing !== undefined && game !== undefined){
            game.startGame("Computer");
            routing.push("/game");
        }
    }
    public render() {
        return (
            <Container>
                <Row className="text-center">
                    <Col>
                        <h3>Who should start?</h3>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Button onClick={this.playerStart} color="primary">Player</Button>{' '}
                        <Button onClick={this.computerStart} type="secondary">Computer</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default GameStart;
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IGameCompleteProps } from './interfaces';
import { Container, Row, Col, Button } from 'reactstrap';
import { Place } from '../../model/GameModel/interfaces';



@inject("game", "routing")
@observer
class Game extends React.Component<IGameCompleteProps> {
    public startOver = () => {
        const { routing, game } = this.props;
        routing.push("/");
        game.endGame();
    }
    public componentDidMount() {
        const { routing, game } = this.props;

        if (!game.playing) {
            routing.push("/");
        }
    }

    public render() {
        const { game } = this.props;

        return (
            <Container>
                <Row className="text-center">
                    <Col>
                        {game.game.winningPlayer === "Computer" && <h3>Winner: {game.game.winningPlayer}!</h3>}
                        {game.game.winningPlayer === "Player" && <h3>Winner: {game.game.winningPlayer}!</h3>}
                        {game.game.winningPlayer === "Draw" && <h3>Draw!</h3>}
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Button onClick={this.startOver} color="primary">StartOver</Button>
                    </Col>
                </Row>

                {game.game.board.slice().reverse().map((item, index) => {
                    return <Row key={index}>
                        {item.row.map((column, colIndex) => {
                            return <Col key={colIndex}>

                                {RenderColumn(column)}
                            </Col>
                        })}
                    </Row>
                })}

            </Container>
        );
    }
}

const RenderColumn = (column: Place) => {
    switch (column) {
        case "Computer":
            return <div className="circleRed"></div>
        case "Player":
            return <div className="circleBlue"></div>
        case "Empty":
        default:
            return <div className="circle"></div>
            break;
    }
}

export default Game;
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IGameProps } from './interfaces';
import { Container, Row, Col, Button } from 'reactstrap';
import { Place } from '../../stores/GameStore';


@inject("game", "routing")
@observer
class Game extends React.Component<IGameProps> {
    public componentDidMount() {
        const { routing, game } = this.props;
        if (!game.playing) {
            routing.push("/");
        }

        if(game.game.winningPlayer !== undefined){
            routing.push("/complete");
        }
    }
    public componentDidUpdate() {
        const{ game, routing} = this.props;
        if(game.game.winningPlayer !== undefined){
            routing.push("/complete");
        }
    }
    public makeMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        // tslint:disable-next-line:radix
        const column = parseInt(e.currentTarget.name);
        const { game } = this.props;

        game.makeMove(column);
    }
    public render() {
        const { game } = this.props;

        return (
            <Container>  
                <h2 className={"text-center " + (game.game.turn === "Computer" ? "redText" : "blueText")}>{game.game.turn}{"'s"} turn </h2>
                    <Row>
                        <Col><Button name="0" disabled={game.game.column0Full || game.game.turn === "Computer"} onClick={this.makeMove}>Drop Token</Button></Col>
                        <Col><Button name="1" disabled={game.game.column1Full || game.game.turn === "Computer"} onClick={this.makeMove}>Drop Token</Button></Col>
                        <Col><Button name="2" disabled={game.game.column2Full || game.game.turn === "Computer"} onClick={this.makeMove}>Drop Token</Button></Col>
                        <Col><Button name="3" disabled={game.game.column3Full || game.game.turn === "Computer"} onClick={this.makeMove}>Drop Token</Button></Col>
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
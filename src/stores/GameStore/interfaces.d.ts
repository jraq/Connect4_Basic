import { IGameModel, Player } from "../../model/GameModel/interfaces";
import { Row } from "reactstrap";

export interface IGameStore {
    game : IGameModel,
    makeMove : (row : number) => void
    
}
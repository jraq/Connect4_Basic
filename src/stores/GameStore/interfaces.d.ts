import { IGameModel, Player } from "../../model/GameModel/interfaces";
import { Row } from "../../../node_modules/@types/reactstrap";

export interface IGameStore {
    game : IGameModel,
    turn : Player
    makeMove : (row : number) => boolean
    
}
import { IGameModel, Player } from "../../model/GameModel/interfaces";
import { Row } from "../../../node_modules/@types/reactstrap";

export interface IGameStore {
    game : IGameModel,
    makeMove : (row : number) => void
    
}
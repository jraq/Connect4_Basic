import { action, observable } from "mobx"
import GameModel from "../../model/GameModel";
import { Player } from "../../model/GameModel/interfaces";
import { IGameStore } from "./interfaces";


class GameStore implements IGameStore {
    
    @observable 
    public game : GameModel;

    @observable
    public turn : Player

    @action
    public makeMove = (row : number) => {
        return true;
    }
    @action
    public startGame = (player: Player) => {
    
    }
}

export default GameStore;
import { computed, observable } from 'mobx';
import { IGameModel, Player } from "./interfaces";

export class GameModel implements IGameModel {
    
    @observable
    public startingPlayer: Player;
    
    @observable
    public moves = [];

    // tslint:disable-next-line:no-empty
    constructor(starting : Player){
       this.startingPlayer = starting;
    }
    @computed
    public get gameWon() {
        return false;
    }
}

export default GameModel
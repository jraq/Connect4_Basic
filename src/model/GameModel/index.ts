import { computed, observable } from 'mobx';
import { IGameModel, Player, Winner } from "./interfaces";


export class GameModel implements IGameModel {
    
    @observable
    public startingPlayer: Player;
    
    @observable
    public moves : number[] = [];

    @observable
    public winningPlayer: Winner;

    @observable
    public turn: Player

    @computed
    public get column0Full() {
       let count = 0;
        this.moves.forEach((item) => {
            if(item === 0){
                count ++
            }
        });

        return count >= 4;
    }

    @computed
    public get column1Full() {
       let count = 0;
        this.moves.forEach((item) => {
            if(item === 1){
                count ++
            }
        });

        return count >= 4;
    }

    @computed
    public get column2Full() {
       let count = 0;
        this.moves.forEach((item) => {
            if(item === 2){
                count ++
            }
        });

        return count >= 4;
    }

    @computed
    public get column3Full() {
       let count = 0;
        this.moves.forEach((item) => {
            if(item === 3){
                count ++
            }
        });

        return count >= 4;
    }
}

export default GameModel
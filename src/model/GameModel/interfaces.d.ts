export type Player = "Computer" | "Player" | "New";
export type Winner = Player | "Draw";
export type Place = Player | "Empty";


export interface IGameModel {
    winningPlayer : Winner
    startingPlayer : Player,
    moves: Array<number>,
    
}
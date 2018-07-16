export type Player = "Computer" | "Player" | "New";
export type Winner = Player | "Draw";


export interface IGameModel {
    winningPlayer : Winner
    startingPlayer : Player,
    moves: Array<number>,
    
}
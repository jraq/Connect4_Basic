export type Player = "Computer" | "Player";

export interface IGameModel {
    gameWon : boolean,
    startingPlayer : Player,
    moves: Array<number>,
    
}
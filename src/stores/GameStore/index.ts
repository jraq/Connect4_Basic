import { action, observable } from "mobx"
import GameModel, { BoardRow } from "../../model/GameModel";
import { Player } from "../../model/GameModel/interfaces";
import { IGameStore } from "./interfaces";
import axois from 'axios';


class GameStore implements IGameStore {

    @observable
    public rowCount : number  = 4;

    @observable 
    public columnCount : number = 4;

    @observable
    public game: GameModel = new GameModel();

    @observable
    public playing: boolean = false;

    @action
    public makeMove = (row: number) => {
        if (this.game.turn === "Player") {
            this.game.turn = "Computer";
            this.game.moves.push(row);
            this.updateBoard();
            if (this.game.winningPlayer === undefined) {
                axois.get("https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production", {
                    params:
                    {
                        moves: JSON.stringify(this.game.moves)
                    }
                }).then((response) => {
                    this.game.moves.push(response.data.pop());
                    this.game.turn = "Player";
                    this.updateBoard();

                })
            }
        }
    }
    @action
    public startGame = (player: Player) => {
        this.game = new GameModel();
        this.game.turn = player;
        this.playing = true;
        this.game.startingPlayer = player;

        if (this.game.board !== undefined) {
            for (let index = 0; index < 4; index++) {
                const boardRow = new BoardRow();
                for (let columns = 0; columns < 4; columns++) {
                    boardRow.row.push("Empty");
                }
                this.game.board.push(boardRow);
            }
        }

        if (player === "Computer") {
            axois.get("https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production", {
                params:
                {
                    moves: JSON.stringify(this.game.moves)
                }
            }).then((response) => {
                this.game.moves.push(response.data.pop());
                this.game.turn = "Player";
                this.updateBoard();

            })
        }
    }

    @action
    public endGame = () => {
        this.game = new GameModel();
        this.playing = false;
        this.game.startingPlayer = "New";
    }

    @action
    private updateBoard = () => {
        const currrentMove = { x : 0, y: 0}
        let row0Count = 0;
        let row1Count = 0;
        let row2Count = 0;
        let row3Count = 0;
        let currentPlayer = this.game.startingPlayer
        this.game.moves.forEach((item) => {
            switch (item) {
                case 0: {
                    this.game.board[row0Count].row[item] = currentPlayer;          
                    currrentMove.x = row0Count;
                    currrentMove.y = item;
                    row0Count++;
                }
                    break;
                case 1: {
                    this.game.board[row1Count].row[item] = currentPlayer;
                    currrentMove.x = row1Count;
                    currrentMove.y = item;
                    row1Count++;
                }
                    break;
                case 2: {
                    this.game.board[row2Count].row[item] = currentPlayer;
                    currrentMove.x = row2Count;
                    currrentMove.y = item;
                    row2Count++;
                }
                    break;
                case 3: {
                    this.game.board[row3Count].row[item] = currentPlayer;
                    currrentMove.x = row3Count;
                    currrentMove.y = item;
                    row3Count++;
                }
                    break;
                default:
                    // TODO: Figure out errors    
                    break;
            }

            currentPlayer = currentPlayer === "Computer" ? "Player" : "Computer";
        });
        this.gameWon(currrentMove);
    }

    @action
    private gameWon(currrentMove : any) {
   
        const playerWInDiagonalNew : Player[] = [];
        

        // Vertical check
        let verticalCount = 0
        this.game.board.forEach(element => {
            element.row.forEach((column, colIndex) => {
                if(column === "Player") {
                    verticalCount = verticalCount + 1
                    console.log(verticalCount);
                    if(verticalCount === 4){
                        // Winner
                        console.log("I've Won")
                        return;
                    }
                } else {
                    verticalCount = 0;
                }
            })
            verticalCount = 0;
        });

        // Horizontal Check
        let horizontalCheck = 0;
        for (let index = 0; index < this.rowCount; index++) {
            
            if(this.game.board[index].row[currrentMove.y] === "Player"){
                horizontalCheck = horizontalCheck + 1;
                console.log("Horizontal", horizontalCheck);
                if(horizontalCheck === 4) {
                    console.log("I've won")
                }
            } else{
                horizontalCheck = 0;
            }
            
        }

        // Diagoal
        for (let row = 0; row < this.rowCount - 3; row++)
        {
            for (let col = 0; col < this.columnCount - 3; col++)
            {       
                if ("Player" === this.game.board[row].row[col] &&
                    "Player" === this.game.board[row + 1].row[col + 1] && 
                    "Player" === this.game.board[row + 2].row[col + 2] && 
                    "Player" === this.game.board[row + 3].row[col + 3])
                {
                    console.log("I've won diagonal 1")
                }
            }
        }

        // Diagonal two
        for (let row = 0; row < this.rowCount - 3; row++)
        {
            for (let col = 3; col < this.columnCount; col++)
            {

                if ("Player" === this.game.board[row].row[col] &&
                    "Player" === this.game.board[row + 1].row[col - 1] && 
                    "Player" === this.game.board[row + 2].row[col - 2] && 
                    "Player" === this.game.board[row + 3].row[col - 3])
                {
                    console.log("I've won diagonal 2")
                }
            }
        }

        this.game.board.forEach((item, index) => {
            item.row.forEach((column, colIndex) => {
                    
            });
        });

       
  
        console.log(playerWInDiagonalNew);


        let playerWinHorizontal: Player[] = [];

        const playerWinVertical0: Player[] = [];
        const playerWinVertical1: Player[] = [];
        const playerWinVertical2: Player[] = [];
        const playerWinVertical3: Player[] = [];

        const playerWinDiagonal1: Player[] = [];
        const playerWinDiagonal2: Player[] = [];

        let compWinHorizontal: Player[] = [];

        const compWinVertical0: Player[] = [];
        const compWinVertical1: Player[] = [];
        const compWinVertical2: Player[] = [];
        const compWinVertical3: Player[] = [];

        const compWinDiagonal1: Player[] = [];
        const compWinDiagonal2: Player[] = [];

        this.game.board.forEach((item, index) => {
            item.row.forEach((column, colIndex) => {
                if (column === "Player") {
                    playerWinHorizontal.push(column);
                    if (playerWinHorizontal.length === 4) {
                        this.game.winningPlayer = "Player";
                    }

                    if (colIndex === 0) {
                        playerWinVertical0.push(column);
                    }

                    if (colIndex === 1) {
                        playerWinVertical1.push(column);
                    }

                    if (colIndex === 2) {
                        playerWinVertical2.push(column);
                    }
                    if (colIndex === 3) {
                        playerWinVertical3.push(column);
                    }

                    if (colIndex === index) {
                        playerWinDiagonal1.push(column);
                    }

                    if (index === 0 && colIndex === 3 || index === 1 && colIndex === 2 || index === 2 && colIndex === 1 || index === 3 && colIndex === 0) {
                        playerWinDiagonal2.push(column);
                    }
                }

                if (column === "Computer") {
                    compWinHorizontal.push(column);
                    if (compWinHorizontal.length === 4) {
                        this.game.winningPlayer = "Computer";
                    }

                    if (colIndex === 0) {
                        compWinVertical0.push(column);
                    }

                    if (colIndex === 1) {
                        compWinVertical1.push(column);
                    }

                    if (colIndex === 2) {
                        compWinVertical2.push(column);

                    }

                    if (colIndex === 3) {
                        compWinVertical3.push(column);
                    }

                    if (colIndex === index) {
                        compWinDiagonal1.push(column);
                    }

                    if (index === 0 && colIndex === 3 || index === 1 && colIndex === 2 || index === 2 && colIndex === 1 || index === 3 && colIndex === 0) {
                        compWinDiagonal2.push(column);
                    }
                }
            })
            playerWinHorizontal = [];
            compWinHorizontal = [];
        });

        if (playerWinDiagonal1.length === 4
            || playerWinDiagonal2.length === 4
            || playerWinVertical0.length === 4
            || playerWinVertical1.length === 4
            || playerWinVertical2.length === 4
            || playerWinVertical3.length === 4) {
            this.game.winningPlayer = "Player";
        }

        if (compWinDiagonal1.length === 4
            || compWinDiagonal2.length === 4
            || compWinVertical0.length === 4
            || compWinVertical1.length === 4
            || compWinVertical2.length === 4
            || compWinVertical3.length === 4) {
            this.game.winningPlayer = "Computer";
        }

        console.log(compWinDiagonal2, playerWinDiagonal2);
        if (this.game.winningPlayer === undefined && this.game.moves.length >= 16) {
            this.game.winningPlayer = "Draw";
        }
    }
}

export default GameStore;
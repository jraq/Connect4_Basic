#Drop Token

The application has a model and store called GameStoreModel and GameStore. The GameStoreModel contains all the information about the current game. The GameStore handles the actions around updating moves, the board, or win conditions.

Three react components make up the ui for the game. GameStart lets you pick the starting player. Game is the game board which shows the current player's turn, board, and buttons to drop tokens. The GameComplete component shows the winner or draw scenarios and the final outcome of the board. 

### Start/Test Application

You will need to cd to the location of the application to run it.

#### Run
```
yarn install
npm run start
```

### Packages Used
* Typescript-React-Starter: https://github.com/Microsoft/TypeScript-React-Starter
* Mobx: https://github.com/mobxjs/mobx
* React-Router: https://github.com/ReactTraining/react-router
* ReactStrap: https://github.com/reactstrap/reactstrap
* Axios: https://github.com/axios/axios

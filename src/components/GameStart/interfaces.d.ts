import { RouterStore } from "mobx-react-router";
import GameStore from "../../stores/GameStore";

export interface IGameStartProps {
    routing: RouterStore
    game: GameStore;
}

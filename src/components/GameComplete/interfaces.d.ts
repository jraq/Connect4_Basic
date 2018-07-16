import GameStore from "../../stores/GameStore";
import { RouterStore } from "mobx-react-router";

export interface IGameCompleteProps {
    game : GameStore
    routing: RouterStore
}

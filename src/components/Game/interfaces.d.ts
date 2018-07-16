import GameStore from "../../stores/GameStore";
import { RouterStore } from "mobx-react-router";

export interface IGameProps {
    game : GameStore
    routing : RouterStore
}
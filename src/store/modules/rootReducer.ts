import { combineReducers } from "@reduxjs/toolkit";
import jogador from "./jogadorSlice";
import jogo from "./jogoSlice";

export default combineReducers({
  jogador,
  jogo,
});

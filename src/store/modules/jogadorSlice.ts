import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiService } from "../../services/api.service";
import { CriarJogadoresTypes } from "../../types/jogo.types";

export const criarJogadorAction = createAsyncThunk(
  "jogador/create",
  async () => {
    const result = await ApiService.criarjogador();
    return result;
  }
);

const requestJogadorSlice = createSlice({
  name: "jogador",
  initialState: {} as CriarJogadoresTypes,
  reducers: {
    criarJogador01: (state, action) => {
      state.id_jogador01 = action.payload.id_jogador01;
      console.log(state.id_jogador01);
    },
    criarJogador02: (state, action) => {
      state.id_jogador02 = action.payload.id_jogador02;
      console.log(state.id_jogador02);
    },

    deleteJogador: (state) => {
      state.id_jogador01 = undefined;
      state.id_jogador02 = undefined;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(criarJogadorAction.fulfilled, (state, action) => {
  //     console.log(action.payload.data ?? {});
  //     return action.payload.data ?? {};
  //   });
  // },
});

export const { criarJogador01, criarJogador02, deleteJogador } =
  requestJogadorSlice.actions;
export default requestJogadorSlice.reducer;

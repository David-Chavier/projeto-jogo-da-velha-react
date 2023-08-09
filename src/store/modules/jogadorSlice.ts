import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiService } from "../../services/api.service";
import { CriarJogoTypes } from "../../types/jogo.types";

export const criarJogadorAction = createAsyncThunk(
  "jogador/create",
  async () => {
    const result = await ApiService.criarjogador();
    return result;
  }
);

const requestJogadorSlice = createSlice({
  name: "jogador",
  initialState: {} as CriarJogoTypes,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(criarJogadorAction.fulfilled, (state, action) => {
      console.log(action.payload.data ?? {});
      return action.payload.data ?? {};
    });
  },
});

export default requestJogadorSlice.reducer;

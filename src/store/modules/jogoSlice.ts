import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiService } from "../../services/api.service";
import {
  AtualizarJogoTypes,
  CriarJogoTypes,
  JogoTypes,
  ListarJogoTypes,
  ReiniciarJogoTypes,
} from "../../types/jogo.types";

export const criarJogoAction = createAsyncThunk(
  "jogo/create",
  async (props: CriarJogoTypes) => {
    const result = await ApiService.criarjogo(props);
    return result;
  }
);

export const obterJogoAction = createAsyncThunk(
  "jogo/list",
  async (props: ListarJogoTypes) => {
    const result = await ApiService.listarjogo(props);

    return result;
  }
);

export const atualizarJogoAction = createAsyncThunk(
  "jogo/update",
  async (props: AtualizarJogoTypes) => {
    const result = await ApiService.atualizarjogo(props);
    return result;
  }
);

export const reiniciarJogoAction = createAsyncThunk(
  "jogo/reiniciar",
  async (props: ReiniciarJogoTypes) => {
    const result = await ApiService.reiniciarJogo(props);
    return result;
  }
);

const requestJogoSlice = createSlice({
  name: "jogo",
  initialState: {} as JogoTypes,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(criarJogoAction.fulfilled, (state, action) => {
      console.log(action.payload.data ?? []);
      return action.payload.data ?? [];
    });

    builder.addCase(obterJogoAction.fulfilled, (state, action) => {
      console.log(action.payload.data ?? []);
      return action.payload.data ?? [];
    });

    builder.addCase(atualizarJogoAction.fulfilled, (state, action) => {
      console.log(action.payload.data ?? []);
      return action.payload.data ?? [];
    });

    builder.addCase(reiniciarJogoAction.fulfilled, (state, action) => {
      console.log(action.payload.data ?? []);
      return action.payload.data ?? [];
    });
  },
});

// export const {} = requestLoginSlice.actions;
export default requestJogoSlice.reducer;

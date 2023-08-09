import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { criarJogadorAction } from "../store/modules/jogadorSlice";
import { criarJogoAction } from "../store/modules/jogoSlice";

const Registro: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const idJogador = useAppSelector((state) => state.jogador);

  async function criarUsuario() {
    await dispatch(criarJogadorAction());
    await dispatch(criarJogoAction({ _id_jogador: idJogador._id_jogador }));
    navigate("/home");
  }

  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid item xs={2}>
          <TextField label="ID da sala" fullWidth></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={criarUsuario}
            sx={{ border: "solid", margin: "30px" }}
          >
            ENTRAR NA SALA
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={criarUsuario}
            sx={{ border: "solid", margin: "30px" }}
          >
            CRIAR PARTIDA
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Registro;

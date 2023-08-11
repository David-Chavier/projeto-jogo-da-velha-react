import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { criarJogador01, criarJogador02 } from "../store/modules/jogadorSlice";
import { criarJogoAction, obterJogoAction } from "../store/modules/jogoSlice";
import { v4 as createUuid } from "uuid";

const Registro: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const [id, setId] = useState<string>("");
  // const idJogador = useAppSelector((state) => state.jogador._id_jogador);
  // console.log(idJogador);

  // Cria um id do jogador01 e chama o dispatch para criar o jogo.
  async function criarUsuario() {
    const _id_jogador = createUuid();
    await dispatch(criarJogoAction({ _id_jogador }));
    dispatch(criarJogador01({ id_jogador01: _id_jogador }));
    navigate("/home");
  }

  //Cria um id para o jogador02 e chama o dispatch para entrar no jogo.
  async function entrarComoJogador02() {
    const id_jogador02 = createUuid();
    if (!id) {
      return alert("Id da sala não informado");
    }
    const result = await dispatch(obterJogoAction({ id_jogador02, id }));

    if (!result.payload.ok) {
      return alert("Informe um id de sala valido");
    }
    console.log(result);

    dispatch(criarJogador02({ id_jogador02 }));
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
          <TextField
            label="ID da sala"
            fullWidth
            onChange={(e) => setId(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={entrarComoJogador02}
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

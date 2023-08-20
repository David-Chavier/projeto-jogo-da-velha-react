import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  criarJogador01,
  criarJogador02,
  deleteJogador,
} from "../store/modules/jogadorSlice";
import { criarJogoAction, obterJogoAction } from "../store/modules/jogoSlice";
import { v4 as createUuid } from "uuid";

const Registro: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const [id, setId] = useState<string>("");
  // const idJogador = useAppSelector((state) => state.jogador._id_jogador);
  // console.log(idJogador);

  // Cria um id do jogador01 e chama o dispatch para criar o jogo.
  useEffect(() => {
    dispatch(deleteJogador());
  }, []);

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
      alert("Id da sala não informado");
      return;
    }

    const result = await dispatch(
      obterJogoAction({ id_jogador02, id: id.slice(1, 5) })
    );

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
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          // width: "100vw",
        }}
      >
        <Grid item xs={11} md={5}>
          <TextField
            defaultValue={"#"}
            label="ID da sala"
            fullWidth
            onChange={(e) => setId(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={11} md={2}>
          <Button
            fullWidth
            onClick={entrarComoJogador02}
            sx={{
              border: "solid",
              height: "55px",
              ":hover": {
                background: "#64d6f4",
                border: "#64d6f4",
                height: "50px",
                color: "#8b0000",
              },
            }}
          >
            ENTRAR NA SALA
          </Button>
        </Grid>
        <Grid item xs={7} md={6}>
          <Button
            fullWidth
            onClick={criarUsuario}
            sx={{
              border: "solid",
              ":hover": {
                background: "#64d6f4",
                border: "#64d6f4",
                height: "50px",
                color: "#8b0000",
              },
            }}
          >
            CRIAR NOVA PARTIDA
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Registro;

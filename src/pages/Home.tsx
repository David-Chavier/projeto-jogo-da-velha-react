import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import {
  atualizarJogoAction,
  obterJogoAction,
} from "../store/modules/jogoSlice";
import { useNavigate } from "react-router-dom";
import { deleteJogador01 } from "../store/modules/jogadorSlice";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const tabuleiro = useAppSelector((state) => state.jogo);
  const idJogador = useAppSelector((state) => state.jogador);

  const arrayJogo = tabuleiro.tabuleiro;
  console.log(idJogador);

  const [actionButton, setActionButton] = useState<string[]>(arrayJogo);

  useEffect(() => {
    setActionButton(arrayJogo);
    entrarComoJogador02();
  }, []);

  async function entrarComoJogador02() {
    const id_jogador02 = idJogador.id_jogador02;
    if (id_jogador02) {
      await dispatch(obterJogoAction({ id_jogador02, id: tabuleiro.id }));
    }
  }

  const newArrayJogo = arrayJogo.slice();

  async function handleAction(id: number) {
    setActionButton(newArrayJogo);
    const result = await dispatch(
      atualizarJogoAction({
        id_jogador01: idJogador.id_jogador01,
        id_jogador02: idJogador.id_jogador02,
        id: tabuleiro.id,
        index: id,
      })
    );
    setActionButton(result.payload.data.tabuleiro);
  }

  function moveParaRegistro() {
    dispatch(deleteJogador01());
    navigate("/");
  }

  return (
    <Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 10px 0 10px",
        }}
      >
        <Grid sx={{ fontSize: "30px" }}>{`ID: #${tabuleiro.id}`}</Grid>
        <Button
          sx={{
            margin: "5px",
            border: "2px solid red",
            color: "red",
            "&:hover": {
              backgroundColor: "brown",
              color: "white",
              border: "none",
            },
          }}
          onClick={moveParaRegistro}
        >
          Sair
        </Button>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "85vh",
        }}
      >
        <Grid>
          <Grid>
            <Grid
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "5px solid brown",
                  borderRight: "5px solid brown",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(0)}
              >
                {actionButton[0]}
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "5px solid brown",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(1)}
              >
                {actionButton[1]}
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "5px solid brown",
                  borderLeft: "5px solid brown",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(2)}
              >
                {actionButton[2]}
              </Button>
            </Grid>
            <Grid
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "5px solid brown",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(3)}
              >
                {actionButton[3]}
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(4)}
              >
                {actionButton[4]}
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderLeft: "5px solid brown",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(5)}
              >
                {actionButton[5]}
              </Button>
            </Grid>
            <Grid
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "5px solid brown",
                  borderRight: "5px solid brown",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(6)}
              >
                {actionButton[6]}
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "5px solid brown",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(7)}
              >
                {actionButton[7]}
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "5px solid brown",
                  borderLeft: "5px solid brown",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(8)}
              >
                {actionButton[8]}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

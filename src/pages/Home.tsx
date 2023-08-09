import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import { atualizarJogoAction } from "../store/modules/jogoSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch<any>();
  const tabuleiro = useAppSelector((state) => state.jogo);
  const idJogador = useAppSelector((state) => state.jogador);

  const arrayJogo = tabuleiro.tabuleiro;

  const [actionButton, setActionButton] = useState<string[]>(arrayJogo);
  const [valor, setValor] = useState<string>("X");

  useEffect(() => {
    setActionButton(arrayJogo);
  }, []);

  const newArrayJogo = arrayJogo.slice();
  async function handleAction(id: number) {
    if (valor === "X" && newArrayJogo[id] === "") {
      setValor("O");
    } else if (valor === "O" && newArrayJogo[id] === "") {
      setValor("X");
    }
    setActionButton(newArrayJogo);
    const result = await dispatch(
      atualizarJogoAction({
        id_jogador01: idJogador._id_jogador,
        id_jogador02: "ba50f377-8c84-4566-a53d-2dd13618c1e7",
        id: tabuleiro.id,
        index: id,
        valor: valor,
      })
    );
    setActionButton(result.payload.data.tabuleiro);
  }

  return (
    <Grid>
      {`ID: ${tabuleiro.id}`}
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "solid",
                  borderRight: "solid",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(0)}
              >
                {actionButton[0]}
              </Button>
              <Button
                sx={{
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "solid",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(1)}
              >
                {actionButton[1]}
              </Button>
              <Button
                sx={{
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "solid",
                  borderLeft: "solid",
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
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "solid",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(3)}
              >
                {actionButton[3]}
              </Button>
              <Button
                sx={{
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
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderLeft: "solid",
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
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "solid",
                  borderRight: "solid",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(6)}
              >
                {actionButton[6]}
              </Button>
              <Button
                sx={{
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "solid",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleAction(7)}
              >
                {actionButton[7]}
              </Button>
              <Button
                sx={{
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "solid",
                  borderLeft: "solid",
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

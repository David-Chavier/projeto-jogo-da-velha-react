import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import {
  atualizarJogoAction,
  reiniciarJogoAction,
} from "../store/modules/jogoSlice";
import { useNavigate } from "react-router-dom";
import { deleteJogador } from "../store/modules/jogadorSlice";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import io from "socket.io-client";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const tabuleiro = useAppSelector((state) => state.jogo);
  const idJogador = useAppSelector((state) => state.jogador);

  const [corBotao, setCorBotao] = useState<string>("none");
  const [corBotao1, setCorBotao1] = useState<string>("none");
  const [corBotao2, setCorBotao2] = useState<string>("none");
  const [corBotao3, setCorBotao3] = useState<string>("none");
  const [corBotao4, setCorBotao4] = useState<string>("none");
  const [corBotao5, setCorBotao5] = useState<string>("none");
  const [corBotao6, setCorBotao6] = useState<string>("none");
  const [corBotao7, setCorBotao7] = useState<string>("none");
  const [corBotao8, setCorBotao8] = useState<string>("none");

  useEffect(() => {
    const socketInstance = io("https://projeto-jogoda-velha-api.onrender.com");
    socketInstance.on("atualizacao", (dadosAtualizados) => {
      if (dadosAtualizados.vitoria.length === 0) {
        setCorBotao("none");
        setCorBotao1("none");
        setCorBotao2("none");
        setCorBotao3("none");
        setCorBotao4("none");
        setCorBotao5("none");
        setCorBotao6("none");
        setCorBotao7("none");
        setCorBotao8("none");
      }

      if (dadosAtualizados.vitoria.includes(0)) {
        setCorBotao("#d3d3d3");
      }
      if (dadosAtualizados.vitoria.includes(1)) {
        setCorBotao1("#d3d3d3");
      }
      if (dadosAtualizados.vitoria.includes(2)) {
        setCorBotao2("#d3d3d3");
      }
      if (dadosAtualizados.vitoria.includes(3)) {
        setCorBotao3("#d3d3d3");
      }
      if (dadosAtualizados.vitoria.includes(4)) {
        setCorBotao4("#d3d3d3");
      }
      if (dadosAtualizados.vitoria.includes(5)) {
        setCorBotao5("#d3d3d3");
      }
      if (dadosAtualizados.vitoria.includes(6)) {
        setCorBotao6("#d3d3d3");
      }
      if (dadosAtualizados.vitoria.includes(7)) {
        setCorBotao7("#d3d3d3");
      }
      if (dadosAtualizados.vitoria.includes(8)) {
        setCorBotao8("#d3d3d3");
      }
      setActionButton(dadosAtualizados.tabuleiro);
    });
    if (tabuleiro.vitoria.includes(0)) {
      setCorBotao("#d3d3d3");
    }
    if (tabuleiro.vitoria.includes(1)) {
      setCorBotao1("#d3d3d3");
    }
    if (tabuleiro.vitoria.includes(2)) {
      setCorBotao2("#d3d3d3");
    }
    if (tabuleiro.vitoria.includes(3)) {
      setCorBotao3("#d3d3d3");
    }
    if (tabuleiro.vitoria.includes(4)) {
      setCorBotao4("#d3d3d3");
    }
    if (tabuleiro.vitoria.includes(5)) {
      setCorBotao5("#d3d3d3");
    }
    if (tabuleiro.vitoria.includes(6)) {
      setCorBotao6("#d3d3d3");
    }
    if (tabuleiro.vitoria.includes(7)) {
      setCorBotao7("#d3d3d3");
    }
    if (tabuleiro.vitoria.includes(8)) {
      setCorBotao8("#d3d3d3");
    }
    if (!idJogador.id_jogador01 && !idJogador.id_jogador02) {
      return navigate("/");
    }
  }, []);

  const arrayJogo = tabuleiro.tabuleiro ?? ["", "", "", "", "", "", "", "", ""];
  const [actionButton, setActionButton] = useState<string[]>(arrayJogo);

  async function handleAction(id: number) {
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

  async function reiniciarJogo() {
    const result = await dispatch(
      reiniciarJogoAction({
        id_jogador01: idJogador.id_jogador01,
        id_jogador02: idJogador.id_jogador02,
        id: tabuleiro.id,
      })
    );

    setActionButton(result.payload.data.tabuleiro);
  }

  function moveParaRegistro() {
    dispatch(deleteJogador());
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
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <RestartAltIcon
            onClick={reiniciarJogo}
            sx={{
              marginRight: "5px",
              cursor: "pointer",
              fontSize: "40px",
              ":hover": { fontSize: "45px" },
            }}
          />
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
                  background: corBotao,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "5px solid brown",
                  borderRight: "5px solid brown",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
                }}
                onClick={() => handleAction(0)}
              >
                {actionButton[0]}
              </Button>
              <Button
                sx={{
                  background: corBotao1,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "5px solid brown",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
                }}
                onClick={() => handleAction(1)}
              >
                {actionButton[1]}
              </Button>
              <Button
                sx={{
                  background: corBotao2,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "5px solid brown",
                  borderLeft: "5px solid brown",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
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
                  background: corBotao3,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "5px solid brown",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
                }}
                onClick={() => handleAction(3)}
              >
                {actionButton[3]}
              </Button>
              <Button
                sx={{
                  background: corBotao4,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
                }}
                onClick={() => handleAction(4)}
              >
                {actionButton[4]}
              </Button>
              <Button
                sx={{
                  background: corBotao5,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderLeft: "5px solid brown",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
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
                  background: corBotao6,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "5px solid brown",
                  borderRight: "5px solid brown",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
                }}
                onClick={() => handleAction(6)}
              >
                {actionButton[6]}
              </Button>
              <Button
                sx={{
                  background: corBotao7,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "5px solid brown",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
                }}
                onClick={() => handleAction(7)}
              >
                {actionButton[7]}
              </Button>
              <Button
                sx={{
                  background: corBotao8,
                  color: "black",
                  fontSize: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTop: "5px solid brown",
                  borderLeft: "5px solid brown",
                  width: "100px",
                  height: "100px",
                  ":hover": { background: "#d3d3d3" },
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

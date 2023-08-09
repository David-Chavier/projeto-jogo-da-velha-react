export type CriarJogoTypes = {
  _id_jogador: string;
};

export type AtualizarJogoTypes = {
  id: string;
  id_jogador01: string;
  id_jogador02: string;
  index: number;
  valor: string;
};

export type JogoTypes = {
  id: string;
  tabuleiro: string[];
};

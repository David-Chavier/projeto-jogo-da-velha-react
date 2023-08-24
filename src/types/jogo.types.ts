export type CriarJogoTypes = {
  _id_jogador: string;
};

export type CriarJogadoresTypes = {
  id_jogador01?: string;
  id_jogador02?: string;
};

export type ListarJogoTypes = {
  id_jogador02: string;
  id: string;
};

export type AtualizarJogoTypes = {
  id: string;
  id_jogador01?: string;
  id_jogador02?: string;
  index: number;
};

export type ReiniciarJogoTypes = {
  id: string;
  id_jogador01?: string;
  id_jogador02?: string;
};

export type JogoTypes = {
  id: string;
  id_jogador01: string;
  id_jogador02: string;
  tabuleiro: string[];
  vitoria: number[];
};

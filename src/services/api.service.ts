import axios from "axios";
import {
  AtualizarJogoTypes,
  CriarJogoTypes,
  ListarJogoTypes,
} from "../types/jogo.types";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export interface ApiResponse {
  ok: boolean;
  message: string;
  data?: any;
}

export class ApiService {
  public static async criarjogador(): Promise<ApiResponse> {
    try {
      const result = await api.post(`/jogador`);
      console.log(result.data);
      return result.data;
    } catch (err: any) {
      console.log(err.response.data);
      return err.response.data;
    }
  }

  public static async criarjogo(props: CriarJogoTypes): Promise<ApiResponse> {
    try {
      const result = await api.post(
        `/jogador/${props._id_jogador}/jogo`,
        props
      );
      return result.data;
    } catch (err: any) {
      console.log(err.response.data);
      return err.response.data;
    }
  }

  public static async listarjogo(props: ListarJogoTypes): Promise<ApiResponse> {
    try {
      const result = await api.get(
        `/jogador/${props.id_jogador02}/jogo/${props.id}`
      );
      return result.data;
    } catch (err: any) {
      console.log(err.response.data);
      return err.response.data;
    }
  }

  public static async atualizarjogo(
    props: AtualizarJogoTypes
  ): Promise<ApiResponse> {
    try {
      const result = await api.put(
        `/jogador/${props.id_jogador01}/jogo/${props.id}/${props.id_jogador02}`,
        props
      );
      return result.data;
    } catch (err: any) {
      console.log(err.response.data);
      return err.response.data;
    }
  }
}

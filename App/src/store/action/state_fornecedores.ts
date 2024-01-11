import { SET_FORNECEDORES } from "./actionTypes"

export const setDefinir_fornecedor = (fornecedor:any) => {
    return {
        type: SET_FORNECEDORES,
        payload: fornecedor
    }
  }
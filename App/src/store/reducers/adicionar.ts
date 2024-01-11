import { SET_FORNECEDORES } from "../action/actionTypes"
const inicial_state_ = {
    state_fornecedores:[
        {   nome: 'Fornecedor 1', endereco: 'Endereço 1', imagem: require('../../assets/Anonymous.png'),categoria:'bebidas'},
        {   nome: 'Fornecedor 2', endereco: 'Endereço 2', imagem: require('../../assets/Anonymous.png'),categoria:'bebidas' },
        {   nome: 'Fornecedor 3', endereco: 'Endereço 4', imagem: require('../../assets/Anonymous.png'),categoria:'comidas' },
        {   nome: 'Fornecedor 3', endereco: 'Endereço 4', imagem: require('../../assets/Anonymous.png'),categoria:'comidas' },
    ]
}

const reducer = (state = inicial_state_, action) =>{
    switch (action.type) {
        case SET_FORNECEDORES : {
            return {
                ...state,
                state_fornecedores: action.payload
            }
        }
        default :
            return state
    }
}
export default reducer
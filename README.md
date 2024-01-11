# Documentação do Projeto

## 1. Introdução

Este projeto é um aplicativo React Native que gerencia fornecedores. Ele permite o cadastro de fornecedores com informações detalhadas, como nome, endereço, contato, categoria e uma imagem associada. Além disso, oferece uma lista de fornecedores com opções de pesquisa e filtragem por categoria. A interface do aplicativo é intuitiva e fácil de usar.

## 2. Estrutura de Diretórios

- **assets:** Contém arquivos de ativos, como imagens.
- **screens:** Contém os componentes React Native para cada tela do aplicativo.
- **store:** Contém a lógica do Redux para gerenciar o estado da aplicação.
- **reducers:** Contém os reducers Redux responsáveis por manipular o estado da aplicação.
- **actions:** Contém as actions Redux que definem as operações disponíveis no aplicativo.

## 3. Componentes Principais

### `CadastroFornecedor.tsx`

Este componente permite ao usuário cadastrar um novo fornecedor. Ele inclui campos como nome, endereço, contato, categoria e a capacidade de selecionar uma imagem associada. O usuário pode escolher uma categoria existente ou criar uma nova. Após o cadastro, os dados são armazenados no estado global usando o Redux.

### `ListagemFornecedores.tsx`

Este componente exibe uma lista de fornecedores com opções de filtragem por categoria. Os fornecedores são exibidos em um formato de lista, mostrando a imagem, nome e endereço de cada um. O usuário pode filtrar os fornecedores por categoria ou visualizar todos. Também há a opção de adicionar um novo fornecedor.

## 4. Fluxo de Dados e Gerenciamento de Estado

O Redux é utilizado para gerenciar o estado global da aplicação. Os fornecedores cadastrados são armazenados no estado Redux, permitindo a comunicação eficiente entre diferentes partes do aplicativo. As actions e reducers são organizados no diretório `store` para manter a lógica de gerenciamento de estado separada.

## 5. Dependências Principais

- **React Navigation:** Utilizado para navegação entre telas.
- **Redux e React-Redux:** Gerencia o estado global da aplicação.
- **react-redux:** Facilita a integração do Redux com o React.
- **expo-image-picker:** Fornece a funcionalidade de seleção de imagens.

## 6. Execução do Projeto

1. Certifique-se de ter o ambiente React Native configurado.
2. Instale as dependências usando `npx expo install`.
3. Execute o aplicativo usando `npx expo start`.

## 7. Pontos de Melhoria

- Implementação de um backend para armazenar os dados de forma persistente.
- Adição de validações nos campos de entrada para garantir dados consistentes.
- Melhorias na interface do usuário para uma experiência mais amigável.

## 8. Observações Finais

Este documento fornece uma visão geral do projeto, suas estruturas principais e dependências. Para uma compreensão mais detalhada, recomenda-se revisar o código-fonte e a documentação específica de cada biblioteca utilizada.

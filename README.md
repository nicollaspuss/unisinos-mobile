## Avaliação e Certificação de Qualidade de Produtos Coloniais no RS sem fins lucrativos

Este aplicativo foi desenvolvido como parte de um desafio acadêmico sem fins lucrativos. 
O objetivo é fortalecer a comercialização de produtos artesanais (Queijo, Salame, Suco de Uva e Mel) através da visibilidade proporcionada pelo **Selo Colonial Brasil**.

## Tecnologias Utilizadas
- **React Native 0.83.4**
- **Expo SDK 55**
- **React 19.2.3**
- **React Native Safe Area Context**: Gerenciamento de áreas seguras para dispositivos com "notch".

## Estrutura Modular (Refatorada)
O projeto foi dividido em módulos:
- `src/data/`: Centralização dos dados.
- `src/components/`: Componentes visuais reutilizáveis (Ex: Avaliação do produto).
- `src/screens/`: Telas da aplicação (Home, Detalhes e Perfil).
- `src/styles/`: Padronização de cores e temas.
- `App.js`: Controlador principal de navegação e estado.

## 📋 Pré-requisitos
- **Node.js**: Versão 18 ou superior.
- **Expo Go**: Instalado no smartphone (Android ou iOS).

## ⚙️ Como Executar

1. **Clone ou baixe o repositório**:
   Certifique-se de que a pasta `src` e o arquivo `App.js` estejam na mesma raiz.

2. **Instale as dependências**:
   No terminal, execute:
   ```bash
   npm install
   npx expo install react-native-safe-area-context
   
3. **Inicie o servidor de desenvolvimento**:
   ```
   npx expo start
   ```
   Isso iniciará o Metro Bundler e exibirá um QR Code no terminal.

4. **Execute no dispositivo**:
   - Abra o app **Expo Go** no seu celular.
   - Escaneie o QR Code exibido no terminal.
   - A aplicação será carregada no seu dispositivo.

## Solução de Problemas
- Se houver erros de dependências, execute `npx expo-doctor` para diagnosticar e corrigir problemas.
- Certifique-se de que o Node.js está atualizado para a versão 18+.
- Para limpar o cache, execute `npx expo start --clear`.

## Estrutura de Arquivos
- `App.js`: Lógica principal do aplicativo.
- `package.json`: Gerenciamento de dependências.
- `README.md`: Instruções de uso e documentação.
---
*Desenvolvido para o projeto de extensão acadêmica.*
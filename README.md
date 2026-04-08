# Avaliação e Certificação de Qualidade de Produtos Coloniais no RS sem fins lucrativos

Este aplicativo foi desenvolvido como parte de um desafio acadêmico para auxiliar na comercialização de produtos artesanais (Queijo, Salame, Suco de Uva e Mel).

## Tecnologias Utilizadas
- React Native 0.83.4
- Expo SDK 55
- React 19.2.3
- JavaScript (ES6+)

## Pré-requisitos
- Node.js (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- npm ou yarn
- App Expo Go instalado no celular (Android ou iOS) - [Download na App Store ou Google Play](https://expo.dev/client)

## Como Executar
1. **Clone ou baixe o repositório**: Certifique-se de ter o código do projeto na sua máquina.

2. **Instale as dependências**:
   ```
   npm install
   ```
   Este comando instalará todas as dependências necessárias, incluindo React Native, Expo e outras bibliotecas.

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
- `App.js`: Lógica principal do aplicativo, interface e integração com WhatsApp.
- `package.json`: Gerenciamento de dependências.
- `README.md`: Instruções de uso e documentação.

---
*Desenvolvido para o projeto de extensão acadêmica.*
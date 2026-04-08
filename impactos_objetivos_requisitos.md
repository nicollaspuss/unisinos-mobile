# Documento de Requisitos e Projeto da Solução

## 1. Introdução
Este projeto apresenta o desenvolvimento de uma aplicação móvel para a comercialização de produtos coloniais, focada na digitalização do negócio familiar de produtos artesanais. O aplicativo visa facilitar a comunicação entre o produtor e o cliente final, proporcionando uma vitrine digital eficiente e um canal direto para pedidos.

## 2. Entidade Parceira e Justificativa de Extensão
- **Entidade:** Empreendimento Familiar de Produtos Coloniais [Nome do Pai]
- **Segmento:** Agronegócio Familiar / Pequeno Produtor Rural
- **Principais Produtos:** Queijo, Salame, Suco de Uva e Mel.

### 2.1. Impacto Social e Ação Extensionista
Este projeto cumpre o objetivo de **contato com a sociedade** e **atendimento a demandas reais**, conforme solicitado pela atividade acadêmica. A solução propõe:
- **Transformação Digital:** Apoio à transição de um negócio tradicional para o ambiente digital, ampliando o alcance de mercado de um pequeno produtor.
- **Sustentabilidade Econômica:** Otimização do processo de vendas e redução de intermediários através de pedidos diretos via WhatsApp.
- **Valorização da Cultura Local:** Promoção de produtos artesanais da região, fortalecendo a economia de base familiar.

## 3. Objetivo do Projeto
Desenvolver um aplicativo multiplataforma que permita aos clientes visualizar o catálogo de produtos disponíveis, selecionar itens e realizar pedidos diretamente via WhatsApp, otimizando o processo de venda e atendimento.

## 4. Requisitos do Sistema

### 4.1. Requisitos Funcionais (RF)
- **RF01 - Catálogo de Produtos:** Exibição de lista com foto, nome, descrição e preço.
- **RF02 - Detalhes do Produto:** Informações detalhadas ao selecionar um item.
- **RF03 - Carrinho de Compras:** Gerenciamento de itens e quantidades selecionadas.
- **RF04 - Finalização de Pedido:** Geração de mensagem formatada e redirecionamento para o WhatsApp do produtor.
- **RF05 - Informações de Contato:** História do produtor e compromisso com a qualidade artesanal.

### 4.2. Requisitos Não-Funcionais (RNF)
- **RNF01 - Tecnologia:** Desenvolvido em React Native (Expo) para suporte Android/iOS.
- **RNF02 - Interface (UI):** Design rústico/colonial intuitivo.
- **RNF03 - Performance:** Otimização de imagens para carregamento rápido.
- **RNF04 - Usabilidade:** Navegação simplificada para públicos de diversas faixas etárias.

## 5. Metodologia de Desenvolvimento e Validação
1. **Levantamento de Dados:** Entrevista presencial com o produtor para identificação de gargalos no processo de venda atual.
2. **Prototipagem:** Criação de wireframes de alta fidelidade validados com o usuário final (o produtor).
3. **Desenvolvimento:** Implementação utilizando React Hooks e Linking API para integração com WhatsApp.
4. **Validação:** Testes de usabilidade realizados com o produtor para garantir que a solução atende às suas necessidades operacionais.

## 6. Arquitetura da Solução
- **Frontend:** React Native com componentes funcionais.
- **Navegação:** React Navigation (Stack e Tab Navigation).
- **Integração:** Linking API para comunicação externa.

---
*Documento elaborado para fins de comprovação de atividade extensionista acadêmica.*
# Projeto: Página Web Empresarial

## Sumário
- [Header](#header)
- [Banner Principal](#banner-principal)
- [Seção "Sobre"](#seção-sobre)
- [Seção "Serviços"](#seção-serviços)
- [Seção "Testemunhos"](#seção-testemunhos)
- [Seção "Contato"](#seção-contato)
- [Footer](#footer)
- [Estilização com CSS](#estilização-com-css)
- [Requisitos JavaScript](#requisitos-javascript)
- [Bibliotecas Externas Recomendadas](#bibliotecas-externas-recomendadas)
- [Link de Entrega](#link-de-entrega)
- [Critérios de Avaliação](#critérios-de-avaliação)

## Header
- Inclui o logo da empresa e um menu de navegação com links para as seções:
  - **Sobre**
  - **Serviços**
  - **Testemunhos**
  - **Contato**
- Contém uma chamada para ação (CTA) como "Entre em Contato" ou "Assine Agora".

## Banner Principal
- Utiliza um slider/carrossel para exibir imagens ou conteúdo sobre os principais serviços/produtos oferecidos pela empresa.
- O slider possui navegação com botões de avançar/retroceder e indicadores (círculos ou barras) para cada slide.
- Implementado com uma biblioteca externa, como **Swiper.js** ou **Slick Slider**.

## Seção "Sobre"
- Breve introdução da empresa ou produto, com um título e parágrafo descritivo.

## Seção "Serviços"
- Uso de cards ou ícones para descrever os principais serviços ou características do produto.
- Consumo de uma API externa para popular essa seção com dados dinâmicos.

## Seção "Testemunhos"
- Área para exibir depoimentos de clientes satisfeitos, incluindo nome, foto e texto do depoimento.
- Depoimentos podem ser estáticos ou dinâmicos, consumindo uma API de comentários.
- Animações de exibição implementadas com **AOS.js**.

## Seção "Contato"
- Formulário de contato com campos para nome, email, telefone e mensagem.
- Validação de formulário usando JavaScript para garantir que todos os campos obrigatórios sejam preenchidos corretamente.
- Integração com **EmailJS** para enviar os dados do formulário para um email.

## Footer
- Contém links para as redes sociais da empresa.
- Informações adicionais, como termos de uso e política de privacidade.

## Estilização com CSS

- **Design Responsivo:** A página é adaptada para diferentes dispositivos (desktop, tablet, smartphone) utilizando media queries ou um framework como **Bootstrap** ou **Tailwind CSS**.
- **Slider:** Transições suaves entre as imagens e personalização dos botões de navegação e indicadores.
- **Seção de Testemunhos:** Animações para que os depoimentos apareçam gradualmente à medida que o usuário rola a página.
- **Botões CTA:** Efeito de hover nos botões, com mudanças de cor e tamanho.

## Requisitos JavaScript

- **Consumo de APIs:** Implementação de chamadas a APIs externas para carregar serviços e depoimentos usando `fetch()`.
- **Validação de Formulário:** Validação para garantir que os campos obrigatórios estejam corretamente preenchidos.
- **Slider Interativo:** Uso de bibliotecas externas para criar um carrossel interativo e fluido.
- **Tratamento de Erros:** Mensagens apropriadas para erros na chamada de API.

## Bibliotecas Externas Recomendadas
- **Swiper.js** ou **Slick Slider**: Para a implementação do slider/carrossel.
- **AOS.js**: Para animações ao rolar a página.
- **Bootstrap** ou **Tailwind CSS**: Para design responsivo.
- **EmailJS**: Para envio de emails diretamente pelo formulário de contato.

## Link de Entrega
- Submeta o link do repositório GitHub.
- Incluir um arquivo `README.md` com instruções de como visualizar o projeto localmente, informações sobre as APIs utilizadas e uma breve explicação das bibliotecas externas aplicadas no projeto.

## Critérios de Avaliação
1. **Funcionalidade:** A página deve estar funcional, com o slider, consumo de API e formulário operando corretamente.
2. **Responsividade:** O design deve se adaptar bem a dispositivos móveis e desktops.
3. **Estilização e Layout:** A página deve ser visualmente atraente, com uma boa disposição dos elementos e uso apropriado de CSS.
4. **Uso de Bibliotecas Externas:** Avaliação do uso adequado de bibliotecas recomendadas e sua implementação correta.
5. **Acessibilidade e Semântica:** Verificar se foram seguidas as boas práticas de acessibilidade e uso de tags semânticas no HTML.

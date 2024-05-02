# Curso Alura Next.js: conheça o framework React

## Aula 1 - Criando o Projeto

### Aula 1 - Apresentação - Video 1

Nesta aula, o instrutor Vinny Neves apresentou o projeto "Code Connect" no Figma, que será desenvolvido ao longo do curso. Ele comparou o Next.js com o desenvolvimento de aplicações React que rodam no lado do cliente, destacando as principais diferenças e técnicas utilizadas pelo Next.js. O curso visa ensinar como listar posts de forma paginada e trabalhar na página de detalhes do post, além de abordar a transição do desenvolvimento no lado do cliente para o lado do servidor, explicando como o Next.js lida com o roteamento. É importante ter conhecimento prévio em React.js para acompanhar as aulas. Este é o primeiro curso a utilizar o projeto "Code Connect", com a promessa de mais cursos futuros.

### Aula 1 - Preparando o projeto - Video 2

Nesta aula, o instrutor abordou o processo de programação e transformação do Code Connect de um simples desenho para uma aplicação funcional utilizando o framework Next.js. Ele explicou o processo de instalação do Next.js, recomendando o uso do comando npx create-next-app@14 para configurar a aplicação na versão 14 do Next. Em seguida, mostrou como testar e rodar a aplicação no ambiente de desenvolvimento, utilizando o comando npm run dev e acessando a URL `http://localhost:3000`. Posteriormente, foi feita uma limpeza no projeto no editor de código VS Code, removendo estilos globais e realizando ajustes no layout padrão fornecido pelo Next.js. Por fim, foram feitas algumas modificações no código, como a troca do título e descrição da aplicação, configuração do idioma para português brasileiro, e exclusão de imagens desnecessárias. O vídeo também destacou a importância de verificar possíveis erros no console do navegador e no terminal, devido ao funcionamento do Next.js com renderização do lado do servidor. Ao final, foi ressaltado que a aplicação base foi criada e limpa, permitindo evoluir o projeto Code Connect.

### Aula 1 - Criando o componente Aside - Video 3

Nesta aula, o instrutor ensina como estilizar uma aplicação web utilizando o Figma como referência para o design. Primeiramente, é feita a estilização do body da página, definindo um gradiente linear de fundo, removendo margens e definindo uma altura mínima. Em seguida, é criado o componente Aside, que é um componente lateral contendo a logo da aplicação. A logo é inserida na pasta public e o componente é criado em React, seguindo boas práticas de organização de arquivos. Posteriormente, são utilizados os módulos CSS para estilizar o componente Aside, aplicando bordas arredondadas, cores de fundo e espaçamentos. A importação e aplicação dos estilos CSS são feitas de forma modular, garantindo que os estilos sejam aplicados apenas ao componente desejado. Ao final, é verificado no navegador o resultado da estilização, mostrando o componente Aside estilizado corretamente. O instrutor destaca a facilidade de uso dos CSS modules fornecidos pelo Next.js e deixa claro que ainda há mais tarefas a serem realizadas no próximo vídeo.

### Aula 1 - Componente Image do Next.js - Video 4

Nesta aula, foi abordada a montagem do layout de uma aplicação web utilizando CSS e Next.js. Inicialmente, foi mencionado o uso do Figma para definir o tamanho do frame da aplicação, com uma largura máxima de 1.200 pixels e margens de 56 pixels para cima e para baixo. Em seguida, foi mostrado o processo de montagem do layout da página no VSCode, criando uma div com o nome de app-container para envolver os componentes Aside e children. A estilização global foi feita no arquivo globals.css, definindo a largura, margens e display flex da app-container.

Além disso, foi abordada a otimização do carregamento de imagens com o Next.js, onde foi demonstrado como utilizar o componente Image do Next.js para substituir a tag img convencional. A imagem da logo foi movida para a pasta do componente Aside e importada no arquivo index.jsx, sendo utilizada no componente Image com a devida especificação do texto alternativo. Foram destacadas as vantagens de utilizar o Image para otimização automática das imagens.

Por fim, foi mencionado que na próxima aula será abordada a construção dos cards que representam as postagens na aplicação, indicando a continuidade do desenvolvimento do layout.

### Aula 1 - Para saber mais: apresentando o Next.js

![Imagen Next.js](image.png)
Enquanto o React é uma das mais famosas bibliotecas focadas no desenvolvimento de interfaces com as pessoas usuárias, o Next.js é um framework que estende as funcionalidades do React e nos permite construir aplicações fullstack.

Neste curso, vamos mergulhar na versão 14 do Next.js e desvendar suas funcionalidades padrão. É como abrir uma caixa de ferramentas cheia de recursos prontos para uso.

Esse framework que adiciona superpoderes ao React foi criado e é mantido pela [Vercel](https://vercel.com/).

Eu vou deixar aqui pra você o link pro artigo que eu escrevi que explica os principais conceitos do [Next.js:](https://www.alura.com.br/artigos/next-js). Nele a gente conversa sobre muita coisa bacana que o Next.js oferece pra gente, então sinta-se à vontade para ler e revisar sempre que necessário.

### Aula 1 - Nessa aula, você aprendeu como`:`

- Criar aplicações Next.js utilizando o npx;
- Estilizar componentes utilizando CSS Modules;
- Lidar com imagens na pasta public;
- Otimizar o uso das imagens utilizando o componente Image do Next.js.

## Aula 2 - Criando um Crad para os posts

### Aula 2 - Estruturando de forma semântica - Video 1

Claro! Nesta aula, o instrutor está ensinando como criar o componente "CardPost" para representar um card de postagem de blog ou de post connect. Ele destaca a importância de utilizar tags semânticas, como "article" e "header", para melhorar a acessibilidade e a indexação pelos motores de busca. Além disso, o instrutor explica como adicionar a imagem principal, o título, o texto e o autor do post, passando essas informações como propriedades para o componente. Também é mencionada a importância de utilizar o componente "Image" do Next.js para carregar as imagens de forma otimizada. Por fim, ele destaca a importância de configurar corretamente o Next.js para permitir o download de imagens de fontes confiáveis. Resumindo, o instrutor ensina como evoluir a aplicação criando o componente "CardPost" e o componente "Avatar" para exibir as informações de um post de blog, destacando a importância de utilizar tags semânticas e o componente "Image" do Next.js.

### Aula 2 - Configurando imagens externas - Video 2

Nesta aula, aprendemos a resolver um erro não tratado em uma aplicação utilizando Next.js, relacionado à segurança ao tentar carregar uma imagem externa. Aprendemos a configurar o arquivo next.config.js para permitir o download da imagem de um determinado hostname confiável, como raw.githubusercontent.com, utilizando a propriedade remotePatterns. Além disso, vimos a importância de adicionar texto alternativo (alt) às imagens para acessibilidade. Por fim, foram mencionados os próximos passos a serem realizados, que incluem a estilização do CardPost e a importação de uma fonte específica.

### Aula 2 - Importando fontes do google - Video 3

Aqui está um resumo da aula sobre importação de fontes do Google no Next.js:

A aula aborda o processo de importar a fonte "Prompt" do Google em um projeto Next.js.
É mostrado um exemplo de importação da fonte "Inter" no arquivo app.js ou .ts, aplicando a classe correspondente no componente React.
É explicada a diferença entre "Pages Router" e "App Router" e a necessidade de ajustar a importação da fonte de acordo com a estrutura do projeto.
O código de exemplo demonstra a importação da fonte "Prompt" no arquivo layout.js, configurando parâmetros como peso, subset e display.
Após a importação, a fonte é aplicada no HTML do projeto.
É sugerido testar a aplicação para verificar se a fonte foi corretamente aplicada.
Por fim, a próxima atividade sugerida é a estilização de um card utilizando CSS Modules.
O foco principal da aula é ensinar como importar e utilizar fontes do Google em um projeto Next.js, abordando as diferenças entre as estruturas de roteamento e fornecendo exemplos práticos de implementação.

### Aula 2 - Para saber mais: importação de fontes otimizadas

Ah, as fontes! Esses pequenos detalhes fazem toda a diferença na estética e usabilidade de um site. Vamos começar com as Google Fonts, um repositório de fontes onde você pode escolher entre uma variedade de estilos para dar aquele toque especial ao seu projeto. Ao importar uma fonte do Google, temos algumas configurações que podem otimizar o carregamento e a apresentação no navegador.

Primeiro, a propriedade subset. Ela é como um filtro que seleciona apenas os caracteres específicos que você precisa, algo essencial se você está lidando com idiomas que têm seu próprio conjunto de caracteres, como o cirílico ou o grego. Isso mantém seu pacote enxuto e seu site ágil.

Depois, temos o display. Essa propriedade define como a fonte será exibida durante o carregamento. O valor swap é um truque mágico que diz ao navegador: "Ei, use a fonte de fallback primeiro e depois troque pela fonte do Google assim que ela estiver pronta!" Isso evita que os usuários vejam aquele efeito desagradável de texto invisível enquanto a fonte está carregando.

Agora, sobre as variantes. Algumas fontes são como um canivete suíço, vêm com um monte de variantes - negrito, itálico, light, e por aí vai. Quando uma fonte não tem variantes, precisamos ser específicos sobre os weights que queremos. Isso é como dizer ao Google: "Só me envie esses pesos específicos, porque é tudo que eu vou usar". Economiza tempo de carregamento e mantém tudo mais leve.

Mas e se você precisar sair do mundo online e usar fontes locais? Nesse caso, você pode importá-las diretamente no seu projeto Next.js. É um pouquinho de trabalho manual, mas nada que uma pessoa desenvolvedora não dê conta. Basta adicionar as fontes aos seus assets e referenciá-las no seu CSS com @font-face, especificando o font-family, src, e font-weight para cada variação que você vai usar:

```jsx
import localFont from 'next/font/local'
const myFont = localFont({
src: './my-font.woff2',
display: 'swap',
})
export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="pt-br" className={myFont.className}>
<body>{children}</body>
</html>
)}
```

E voilà! Seja com Google Fonts ou com fontes locais, seu Next.js vai ser estiloso e rápido, com todos os caracteres e pesos que você precisar, prontinho para encantar pessoas usuárias com uma experiência visual sem igual.

### Aula 2 - Nessa aula, você aprendeu como`:`

- Utilizar imagens remotas no componente Image;
- Configurar as props obrigatórias do componente Image;
- Importar fontes do Google;
- Analisar os logs e reagir a avisos de configurações do Next.js que estão depreciadas.

## Aula 3 - Obtendo dados da API

### Aula 3 - Configurando o backend - Video 1

Nesta aula, o foco é configurar o back-end da aplicação web utilizando uma API e a biblioteca JSON Server. Alguns dos principais pontos abordados são:

Instalação da versão específica do JSON Server (1.0.0-alpha.22) usando o comando:
> npm i -g json-server@1.0.0-alpha.22.

Inicialização do JSON Server para monitorar e servir um arquivo JSON chamado posts.json usando o comando:
> json-server posts.json -p 3042.

Verificação do funcionamento da API através do endpoint fornecido.
Importância de entender melhor o funcionamento do JSON Server, sendo sugerido um artigo para isso.
Próximo passo é a conexão do Next.js com a API configurada.
O objetivo é preparar o ambiente para que a aplicação possa consumir os dados da API e exibi-los na interface do usuário.

### Aula 3 - Criando função fetch - Video 2

A aula abordou o processo de conexão entre as diferentes partes de um projeto, como o card estilizado e a API rodando. Para isso, é necessário executar o json-server e o npm run dev em abas separadas no terminal.

Foi apresentada a criação da função getAllPosts(), que tem como objetivo obter os dados da API. A função fetch() é utilizada para realizar a requisição dos dados, com tratamento de erro para verificar a resposta da requisição.

Destacou-se a importância de tornar o componente assíncrono para lidar com chamadas assíncronas e obter os dados do lado do servidor.

Ressaltou-se a importância de ajustes no layout e tratamento de erros, mas enfatizou-se que a API já está se comunicando com a aplicação Next, abrindo caminho para o desenvolvimento de outras funcionalidades.

O conteúdo apresentado destaca a importância da integração entre as diferentes partes de um projeto para garantir o correto funcionamento e a comunicação eficiente entre elas.

Copiar texto da Luri para área de transferêcia

### Aula 3 - Escrevendo logs - Video 3

A aula aborda a importância de ter logs bem organizados para facilitar a identificação e resolução de bugs em aplicações Next.js.
É apresentado o pacote winston, que permite escrever logs de forma mais robusta e organizada, substituindo o uso do console.log().
O processo de configuração do logger winston é detalhado, mostrando como instalar o pacote e criar o logger com diferentes níveis de importância e separação dos logs em arquivos específicos.
É explicado como utilizar o logger no código da aplicação, substituindo os console.log() por logger.error() e logger.info() para mensagens de erro e informativas, respectivamente.
É demonstrado como testar o código, recarregar a página para gerar logs e verificar a saída nos arquivos combined.log e error.log.
É apresentada uma prática de retornar um array vazio em caso de erro na requisição, evitando que a aplicação quebre.
A conclusão destaca a configuração bem-sucedida do logger winston na aplicação Code Connect, proporcionando uma melhor gestão e monitoramento dos logs.

### Aula 3 - Para saber mais: a importância de bons logs

Desde os primeiros computadores, manter um registro sequencial dos processos é super importante para entendermos a ordem de execução das coisas e identificar falhas.

Logs economizam tempo e são essenciais na resolução de problemas e suporte de incidentes. Eles são fundamentais para rastrear o fluxo da informação e melhorar o desempenho, algo que a monitorização de desempenho de aplicativos (APM) não consegue sozinha.

A análise de log é crucial. Logs revelam comportamentos anormais e possíveis pontos de melhoria. Ferramentas apropriadas podem descobrir gargalos de desempenho e melhorias não visíveis durante o desenvolvimento. A análise prolongada de logs também ajuda a identificar falhas de segurança.

Existem dois tipos principais de logs: diagnóstico e auditoria. Logs de diagnóstico estão relacionados ao comportamento da aplicação e ao fluxo da informação - como por exemplo dizer que algo deu errado, quando e porquê, enquanto logs de auditoria registram transações (quem fez o que e quando), para requisitos de software ou simplesmente para o cumprimento de leis.

Um ponto importante: devemos sempre usar níveis apropriados de log para identificar a criticidade dos eventos.

Os níveis básicos são:  

- error - erro,
- warning - aviso,
- info - informação,
- debug - depuração
- trace - rastreamento.

Quando a gente precisa solucionar um problema em uma aplicação Node.js, os logs podem ser fundamentais para entender a gravidade e a causa do problema. Stack traces (rastros de pilha) e outros tipos de atividades podem ser capturados em logs e vinculados a IDs de uma sessão específica, ID de um usuário — qualquer coisa que ajude a monitorar sua aplicação de forma mais eficiente.

O Node.js já vem com recursos de registro de logs integrados, como o console.log, mas uma biblioteca dedicada de logs, como o Winston, oferece mais opções para escrever os registros da sua aplicação. E foi por isso que utilizamos ele!

Para conhecer mais sobre o winston, que tal uma olhada na [documentação](https://github.com/winstonjs/winston) para ir mais fundo sobre o quão poderoso ele é.

### Aula 3 - Nessa aula, você aprendeu como`:`

- Subir uma API usando o json-server;
- Obter dados do lado do Servidor;
- Configurar o winton como o logger da Code Connect.

## Aula 4 - 

### Aula 4 -  - Video 1

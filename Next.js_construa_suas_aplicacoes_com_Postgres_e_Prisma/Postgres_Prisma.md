# Next.js: construa suas aplicações com Postgres e Prisma

## Aula 1 - Next FullStack

## Aula 1 - Postgres via docker-compose - Video 1

Nessa aula, aprendemos como preparar o ambiente de desenvolvimento para o nosso projeto Next.js fullstack, usando o Docker Compose para levantar um banco de dados PostgreSQL.

Primeiro, baixamos o arquivo dockercompose.yaml do Gist, que define os serviços do nosso projeto, incluindo o PostgreSQL.

Depois, criamos um novo arquivo chamado dockercompose.yaml no VS Code e colamos o conteúdo do Gist.

Em seguida, abrimos o terminal no VS Code e, na raiz do projeto, executamos o comando docker compose up d para levantar o ambiente de desenvolvimento. No entanto, vamos passar uma flag no final "-d". Isso fará com que o terminal não fique preso nesse comando. O próprio docker vai cuidar de manter esse Postgres rodando.

> docker compose up -d

Com isso, nosso PostgreSQL estará pronto para ser usado pelo Next.js!

Agora, estamos prontos para aprender como o Next.js se conecta ao PostgreSQL!

### Aula 1 - Instalando o Prisma - Video 2

Nessa aula, aprendemos a configurar o Prisma, um ORM que facilita a comunicação com o banco de dados, evitando a escrita manual de SQL.

Começamos instalando o Prisma com o comando npx prisma init, que cria o arquivo schema.prisma e o arquivo .env para armazenar as variáveis de ambiente.

Em seguida, definimos os modelos User e Post no schema.prisma, definindo os campos de cada tabela e seus tipos de dados.

Também aprendemos a criar relacionamentos entre os modelos, como o relacionamento entre User e Post, onde um usuário pode ter vários posts.

Por fim, vimos como o Prisma mapeia esses modelos para o banco de dados Postgres, criando as tabelas e relacionamentos correspondentes.

### Aula 1 - Migrações, tabelas e DBeaver - Video 3

Nesta aula, aprendemos como definir os modelos de dados no Prisma e como transformálos em tabelas no banco de dados Postgres.

Primeiro, definimos os campos para os modelos Post e User no arquivo schema.prisma, incluindo campos como createdAt, updatedAt e authorId.

Depois, configuramos o DATABASE_URL no arquivo .env para conectar o Prisma ao banco de dados Postgres, utilizando o nome do banco de dados codeconnect_dev que encontramos no arquivo dockercompose.yaml.

Em seguida, instalamos o Prisma no projeto com **npm i prisma** e executamos a primeira migração com o comando npx prisma migrate dev name init. Essa migração cria as tabelas no banco de dados de acordo com os modelos definidos no schema.prisma.

> npx prisma migrate dev --name init

Para verificar se as tabelas foram criadas corretamente, utilizamos o DBeaver, um software para gerenciar bancos de dados. Conectamos ao banco de dados codeconnect_dev e visualizamos as tabelas Post e User com seus respectivos campos.

Com o banco de dados configurado e as tabelas criadas, estamos prontos para conectar o Next.js ao Prisma para acessar os dados. Essa será a nossa próxima tarefa!

### Aula 1 - Nessa aula, você aprendeu como´:´

- Levantar um container docker do postgres;
- Configurar o ambiente de desenvolvimento do Prisma;
- Modelar entidades e relacionamentos no Prisma;
- Executar migrations para inicializar o banco de dados.

## Aula 2 - Prisma Client

### Aula 2 - Gerando o Prisma client - Video 1

Há um detalhe importante: essa geração do Prisma Client deve ser feita ou refeita sempre que houver uma alteração no banco de dados.

> npx prisma generate

Nessa aula, aprendemos como conectar o Next.js ao Postgres usando o Prisma.

Primeiro, usamos o comando npx prisma generate para gerar o Prisma Client, que é uma classe que nos permite interagir com o banco de dados.

Depois, criamos um arquivo chamado db.js para armazenar a instância do Prisma Client, que pode ser importada por qualquer parte da aplicação que precise se conectar ao banco de dados.

Com isso, estamos dando um passo importante na direção de transformar nossa aplicação Next.js em uma aplicação Fullstack, utilizando o Postgres como nossa fonte de dados.

### Aula 2 - Obtendo os Posts do Postgres - Video 2

Nessa aula, aprendemos a conectar o nosso projeto Next.js ao banco de dados Postgres utilizando o Prisma Client.

Primeiro, substituímos a integração com a API REST pela função getAllPosts, que agora utiliza o Prisma Client para obter os posts do banco de dados.

Utilizamos o trycatch para garantir que a aplicação não quebre caso ocorra algum erro ao buscar os posts.

Em seguida, aprendemos a usar o db.post.findMany() para buscar todos os posts do banco de dados.

Por fim, testamos a conexão com o banco de dados e verificamos que a tabela de posts está vazia.

No próximo vídeo, aprenderemos a utilizar o Seed do Prisma para popular a tabela de posts com dados fictícios.

### Aula 2 - Seed de dados - Video 3

Nesta aula, aprendemos como semear o banco de dados com informações usando o Prisma Client.

Primeiro, configuramos uma instrução no package.json para o Prisma executar o arquivo seed.js quando o comando prisma db seed for executado.

Depois, criamos o arquivo seed.js e usamos a função upsert() para inserir ou atualizar dados no banco de dados.

Utilizamos um exemplo da documentação do Prisma para criar um usuário e seus posts, mas modificamos o código para inserir a Ana Beatriz e seus posts.

Para evitar digitar muitos dados, copiamos uma massa de dados de posts de um Gist e usamos o método forEach() para iterar sobre cada post e inserir ou atualizar no banco de dados.

Ao final, executamos o comando npx prisma db seed para semear o banco de dados e verificamos no DBeaver se os dados foram inseridos corretamente.
> npx prisma db seed

No entanto, ao recarregar a página do blog, encontramos um erro porque o Prisma não trouxe o autor do post.

No próximo vídeo, vamos aprender a corrigir esse erro e melhorar a experiência do usuário.

### Aula 2 - Melhor experiência para o usuário - Video 4

Nessa aula, aprendemos como criar uma página de erro personalizada no Next.js, utilizando o componente error.js dentro da pasta app.

Vimos como tratar erros de tempo de execução, que acontecem enquanto a aplicação está rodando, e como exibir uma mensagem de erro amigável para o usuário.

Também aprendemos sobre a importância de incluir relacionamentos entre modelos no Prisma, utilizando a propriedade include no findMany. Isso garante que os dados relacionados sejam carregados corretamente, evitando erros de leitura de propriedades indefinidas.

No final da aula, você recebeu um desafio para criar uma página de erro mais bonita, utilizando o design da Isa no Figma.

Lembrese de que, para forçar o erro e testar sua página de erro, você pode remover o include da page.js.

### Aula 2 - Para saber mais: ORMs

ORM: [Object-Relational Mapping](https://cursos.alura.com.br/extra/alura-mais/orm-o-que-e--c208), é uma ferramenta essencial no desenvolvimento de software. A criação dos ORMs foi motivada pela necessidade de superar as diferenças entre os sistemas de banco de dados relacional e a programação orientada a objetos, que são duas formas bastante distintas de pensar sobre dados.

Um ORM serve como uma ponte entre esses dois mundos, permitindo que desenvolvedores manipulem o banco de dados usando a linguagem de programação de sua escolha (no nosso caso, JavaScript), sem ter que escrever consultas SQL complexas e sem se preocupar com as diferenças de tipos de dados. Isso não só economiza um tempo valioso, mas também diminui a probabilidade de erros que podem ocorrer ao traduzir manualmente entre esses dois sistemas.

### Aula 2 - Nessa aula, você aprendeu como`:`

- Obter dados utilizando o método findMany;
- Incluir relacionamentos de forma automática via Prisma;
- Configurar e executar seed de dados com o prisma db seed.

## Aula 3 - Páginação com Take e Skip

### Aula 3 - Queries com Prisma - Video 1

Nesta aula, aprendemos como corrigir um erro no console do navegador relacionado a atributos extras, causado por extensões como o Grammarly. Também exploramos a paginação de posts usando o Prisma, definindo o número de posts por página com o take e ordenandoos por data de criação com o orderBy.

Para paginar os posts, definimos a constante perPage com o número de posts por página (6 neste caso) e usamos o take: perPage dentro do objeto de configuração do findMany(). Também ordenamos os posts por data de criação usando orderBy: { createdAt: 'desc' }.

No próximo vídeo, vamos aprender como implementar os controles de navegação de página anterior e página seguinte, para que o usuário possa navegar entre as páginas de posts.

### Aula 3 - Paginando o resultado da query - Video 2

Nessa aula, aprendemos a implementar a paginação na nossa aplicação, usando o Prisma para acessar o banco de dados.

Primeiro, definimos o número de itens por página (perPage) e criamos as variáveis prev e next para controlar a navegação entre as páginas.

Depois, calculamos o total de itens (totalItems) e o total de páginas (totalPages) usando o método count() do Prisma e a função Math.ceil().

Para controlar o salto entre os itens, usamos a variável skip, que calcula quantos itens devem ser ignorados para exibir a página correta.

Por fim, corrigimos um erro que acontecia ao navegar entre as páginas, garantindo que o valor da página atual seja sempre um inteiro.

### Aula 3 - Para saber mais: queries poderosas com o Prisma

Vamos simular uma aplicação para gerenciar uma coleção de itens de memorabilia geek, como action figures, quadrinhos e jogos. Utilizaremos o Prisma para realizar operações complexas no banco de dados.

#### create

Para adicionar um novo item à coleção, usamos o método create:

```javaScript
const novoItem = await prisma.item.create({
  data: {
    nome: 'Action Figure Spider-Man',
    descricao: 'Figura de ação do Spider-Man da série Marvel Legends.',
    categoria: 'Action Figure',
    preco: 29.99
  },
});
console.log(novoItem);
```

#### findMany

Suponha que queremos encontrar todos os itens de uma categoria específica que têm um preço menor que um determinado valor. Podemos fazer isso facilmente com o Prisma:

```javaScript
const itensBaratos = await prisma.item.findMany({
  where: {
    AND: [
      { categoria: 'Quadrinhos' },
      { preco: { lt: 15 } }
    ]
  },
});
console.log(itensBaratos);
```

#### update

Para atualizar um item na nossa coleção, utilizamos o método update. Suponha que queremos atualizar o preço de um item específico:

```javaScript
const atualizaItem = await prisma.item.update({
  where: {
    id: 1,
  },
  data: {
    preco: 19.99,
  },
});
console.log(atualizaItem);
```

#### delete

Para remover um item da coleção, podemos usar o método delete:

```javaScript
const removeItem = await prisma.item.delete({
  where: {
    id: 1,
  },
});
console.log(removeItem);
```

#### Boas práticas e algumas dicas

- Use as migrations do Prisma: As migrações simplificam o processo de atualização do esquema do banco de dados, mantendo tudo sincronizado e seguro.

- Aproveite a tipagem: Embora estejamos usando JavaScript, o Prisma oferece um nível de segurança com os tipos que nos ajuda a prevenir erros comuns de banco de dados.

- Otimize as queries: O Prisma permite a realização de operações complexas com eficiência. No entanto, sempre revise suas queries para garantir que elas sejam otimizadas para performance.

### Aula 3 - Nessa aula, você aprendeu como`:`

- Paginar dados com o Prisma;
- Aplicar conceitos de take e skip usando queries do Prisma;
- Analisar e resolver bugs baseado relacionados ao operador soma entre number e string.

## Aula 4 - Detalhes do Post

### Aula 4 - Query com o findFirst - Video 1

Nessa aula, aprendemos a fazer uma query com o método findFirst do Prisma para buscar um post no banco de dados.

Primeiro, removemos o código que fazia o fetch da API e substituímos por uma chamada ao db.post.findFirst().

Depois, configuramos a query com as opções where e include. A opção where filtra o post pelo slug que recebemos como parâmetro, e a opção include garante que o autor do post seja incluído nos resultados.

Por fim, testamos o código e vimos que o post é carregado corretamente.

No entanto, ainda precisamos implementar a programação defensiva para tratar casos em que o post não existe. Isso será feito na próxima aula!

### Aula 4 - Página 404 e posts inexistentes - Video 2

Nessa aula, aprendemos como tratar posts inexistentes em nossa aplicação Next.js.

Primeiro, implementamos um trycatch para lidar com erros ao buscar um post pelo slug. Se o post não for encontrado, lançamos uma exceção e redirecionamos o usuário para a página /notfound.

Depois, criamos uma página customizada para o erro 404, utilizando o arquivo notfound.js. Essa página exibe uma mensagem simples informando que o conteúdo não foi encontrado.

Por fim, você terá o desafio de implementar o layout da página 404, seguindo o protótipo do Figma, e também criar o formulário de busca que será usado em todas as páginas da aplicação.

Lembrese de que o formulário de busca deve ser implementado no layout principal para evitar repetição de código.

Na próxima aula, vamos trabalhar juntos no comportamento do formulário de busca.

### Aula 4 - Nessa aula, você aprendeu como`:`

- Obter dados utilizando o método findFirst;
- Se recuperar de erros não esperados;
- Customizar página 404 do Next.js;
- Redirecionar a navegação do Next.js no lado do servidor.

## Aula 5 - Buscas com Where e Deploy

### Aula 5 - Buscando Posts - Video 1

Nessa aula, aprendemos a implementar a funcionalidade de busca na nossa aplicação Next.js.

Primeiro, criamos um formulário de busca com um input chamado q (query) que envia uma requisição GET para a raiz do nosso projeto.

Em seguida, na página inicial (page.js), analisamos os searchParams para verificar se existe um parâmetro q. Se existir, armazenamos o valor em uma constante chamada searchTerm.

Depois, passamos o searchTerm como parâmetro para a função getAllPosts, que é responsável por buscar os posts do banco de dados.

Na função getAllPosts, criamos um objeto where para definir a cláusula where do Prisma. Se o searchTerm existir, adicionamos uma condição where.title.contains para filtrar os posts pelo título, ignorando maiúsculas e minúsculas.

Por fim, testamos a funcionalidade de busca no navegador e verificamos que ela funciona corretamente, filtrando os posts de acordo com o termo buscado.

No entanto, identificamos um problema: a paginação não leva em conta o termo buscado, o que pode resultar em resultados inconsistentes. Para resolver esse problema, vamos evoluir o nosso link para uma forma mais robusta, contemplando o termo buscado na paginação.

### Aula 5 - Parâmetros nos links - Video 2

Nessa aula, aprendemos como usar parâmetros nos links da nossa aplicação Next.js para melhorar a navegação e a busca.

Vimos como construir links dinâmicos usando o objeto de configuração href, que nos permite definir o pathname (caminho da URL) e a query (parâmetros da URL).

Com isso, conseguimos criar links para a página anterior e próxima, levando em consideração o termo de busca e a página atual.

No final, testamos as alterações e vimos como a busca e a paginação funcionam perfeitamente, com o termo de busca sendo mantido ao navegar entre as páginas.

### Aula 5 - Deploy na Vercel - Video 3

Que legal que você está acompanhando o curso de Next.js!

Nessa aula, aprendemos como fazer o deploy do nosso projeto na Vercel, utilizando o Postgres e o Prisma.

Primeiro, ajustamos as variáveis de ambiente no nosso .env local para que elas sejam compatíveis com a Vercel. Depois, configuramos o package.json para executar os comandos do Prisma antes do next build.

Em seguida, criamos um novo projeto na Vercel e importamos o nosso repositório do GitHub. A Vercel identificou que se trata de um projeto Next.js e iniciou o processo de build.

No entanto, a Vercel não conseguiu se conectar ao banco de dados. Para solucionar esse problema, adicionamos um banco de dados Postgres ao nosso projeto na Vercel.

Após a criação do banco de dados, solicitamos um redeploy e acompanhamos o processo de build. As variáveis de ambiente foram carregadas, o Prisma Client foi gerado, as migrations foram executadas e o banco de dados foi populado.

Por fim, a Vercel concluiu o build e o deploy, e nossa aplicação ficou disponível online!

Agora, podemos acessar nossa aplicação através do domínio gerado pela Vercel e testar todas as funcionalidades, incluindo a busca por posts.

Com isso, finalizamos o curso e aprendemos a construir uma aplicação Next.js Fullstack, sem a necessidade de uma API externa!

### Aula 5 - Para saber mais: clausulas where complexas

![Imagem Prisma](image-1.png)

Dentro do ecossistema Prisma, uma das funcionalidades mais poderosas é a construção de cláusulas WHERE para filtrar dados de forma precisa. O Prisma oferece uma interface flexível, o que nos permite lidar com condições complexas de forma elegante. Vamos explorar como podemos aproveitar ao máximo essa funcionalidade, com exemplos práticos para ilustrar a flexibilidade do Prisma na manipulação de consultas.

#### Filtragem básica

Imagine que temos uma tabela de usuários e queremos encontrar um usuário pelo seu email:

```JavaScript
const usuario = await prisma.usuarios.findUnique({
  where: {
    email: 'fulano@exemplo.com',
  },
});
```

Esta é a forma mais simples de usar a cláusula WHERE: estamos especificando que queremos um registro que corresponda exatamente ao email fornecido. Bem parecido com o que fizemos no Code Connect.

#### Condições compostas

E se precisarmos de uma busca mais específica? Por exemplo, encontrar um usuário que tenha mais de 18 anos e que more em "Nova Friburgo":

```JavaScript
const usuarios = await prisma.usuarios.findMany({
  where: {
    idade: {
      gt: 18,
    },
    cidade: Nova Friburgo',
  },
});
```

Aqui, usamos { gt: 18 } para especificar uma condição "maior que" (greater then, em inglês). O Prisma oferece vários operadores para lidarmos com condições mais complexas, se liga só aqui na [documentação](https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting).

#### Utilizando OR e AND

Para consultas que exigem lógica "OU" ou "E", o Prisma tem uma abordagem bacana. Vamos buscar usuários que moram em "São Paulo" OU "Rio de Janeiro":

```JavaScript
const usuarios = await prisma.usuarios.findMany({
  where: {
    OR: [
      { cidade: 'São Paulo' },
      { cidade: 'Rio de Janeiro' },
    ],
  },
});
```

E se quisermos encontrar usuários que morem em "São Paulo" E tenham sobrenome "Silva"? Vem comigo:

```JavaScript
const usuarios = await prisma.usuarios.findMany({
  where: {
    cidade: 'São Paulo',
    sobrenome: 'Silva',
  },
});
```

#### Trabalhando com listas

Suponha que queremos encontrar usuários que possuam interesse em "tecnologia" ou "programação". Considerando que interesses seja um campo do tipo array, podemos fazer:

```JavaScript
const usuarios = await prisma.usuarios.findMany({
  where: {
    interesses: {
      hasSome: ['tecnologia', 'programação'],
    },
  },
});
```

#### Buscas e relacionamentos

O Prisma também brilha ao lidar com relacionamentos. Se precisarmos encontrar usuários que publicaram pelo menos um post, podemos fazer assim:

```JavaScript
const usuarios = await prisma.usuarios.findMany({
  where: {
    posts: {
      some: {},
    },
  },
});
```

E se quisermos encontrar usuários com posts que tenham mais de 100 curtidas?

```JavaScript
const usuarios = await prisma.usuarios.findMany({
  where: {
    posts: {
      some: {
        curtidas: {
          gt: 100,
        },
      },
    },
  },
});
```

Reparou que podemos combinar várias coisas diferentes?

#### Negando condições

Finalmente, se precisarmos buscar por usuários que NÃO moram em "São Paulo", o Prisma nos permite usar o operador not de forma elegante:

```JavaScript
const usuarios = await prisma.usuarios.findMany({
  where: {
    NOT: {
      cidade: 'São Paulo',
    },
  },
});
```

Cada um desses exemplos ilustra o poder do Prisma ao construir cláusulas WHERE. O Prisma transforma o processo de consulta em uma experiência mais declarativa, assim podemos focar na lógica de negócios em vez de nos perdermos em sintaxes complexas de query.

### Aula 5 - Nessa aula, você aprendeu como`:`

- Evoluir queries e aplicar cláusulas WHERE;
- Criar Links utilizando o objeto de configuração;
- Cuidar da infraestrutura do projeto, customizando scripts de build;
- Vincular um banco de dados Postgres a um projeto na Vercel.

### Aula 5 - Conclusão - Video 4

Que legal que você chegou até aqui! Nessa aula, finalizamos o curso de Next.js e aprendemos a construir uma aplicação fullstack com Postgres e Prisma.

Começamos utilizando o Docker Composer para configurar nosso ambiente local, garantindo que qualquer pessoa possa clonar o repositório e ter a versão correta do Postgres.

Depois, configuramos o Prisma, que nos ajudou a modelar nossas entidades sem precisar escrever SQL, além de cuidar da inicialização do banco de dados, das migrations e da tradução para a sintaxe do Postgres.

Na página do Next.js, removemos a camada de fetch da API antiga e introduzimos o banco de dados, utilizando o Prisma para realizar as queries.

Após codificar tudo, implementamos, configuramos as variáveis de ambiente e fizemos o deploy na Vercel, simulando um ambiente real.

Agora, nossa aplicação está disponível para o mundo! Você pode explorar o Code Connect, adicionar seus próprios posts e publicar na Vercel.

Lembrese de usar a hashtag #aprendinaAlura para compartilhar seu projeto!

Se precisar de ajuda, estamos no Fórum e no Discord da Escola de FrontEnd. Até a próxima!

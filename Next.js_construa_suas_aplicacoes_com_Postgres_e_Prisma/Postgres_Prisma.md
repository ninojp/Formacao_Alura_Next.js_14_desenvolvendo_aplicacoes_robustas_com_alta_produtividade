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

## Aula 5 - 

### Aula 5 -  - Video 1

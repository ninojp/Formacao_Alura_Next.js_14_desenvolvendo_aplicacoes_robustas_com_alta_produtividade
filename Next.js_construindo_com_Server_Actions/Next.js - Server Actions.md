# Next.js: construindo com Server Actions

## Aula 01 - Evoluindo o Banco de dados

### Aula 01 - Apresentação - Vídeo

Nessa aula, vamos dar início a uma nova etapa do nosso projeto Code Connect, utilizando o Next.js e o Prisma. Nosso objetivo é adicionar interatividade ao projeto, permitindo que as pessoas usuárias curtam, comentem e respondam aos comentários dos posts.

Para isso, vamos aprimorar o banco de dados, ajustar a aplicação e adicionar novos componentes, tanto do lado do servidor quanto do cliente.

Você vai aprender a interagir com a pessoa usuária de diversas maneiras, combinando as funcionalidades do React e do Next, e aumentando a produtividade do seu desenvolvimento.

Se você já tem experiência com React, PostgreSQL e Docker, está pronto para essa jornada!

### Aula 01 - Migration e Comentários - Vídeo

Olá! Nessa aula, aprendemos a adicionar a funcionalidade de comentários no nosso projeto Code Connect. Começamos analisando a estrutura dos comentários, que podem ser associados a posts ou a outros comentários, criando uma hierarquia.

Em seguida, criamos o modelo Comment no Prisma, definindo campos como text, createdAt, updatedAt, authorId, postId e parentId.

Para estabelecer o relacionamento entre os modelos, criamos relações entre Comment e User, Comment e Post, e também um relacionamento auto-referencial entre Comment e Comment para representar a hierarquia de comentários.

Por fim, adicionamos o campo likes ao modelo Post para contabilizar os likes de cada post.

Com o esquema atualizado, executamos a migração no Prisma para atualizar o banco de dados e estamos prontos para implementar a funcionalidade de comentários no nosso projeto!

### Aula 01 - Server Action - Vídeo

Nessa aula, aprendemos a criar uma Server Action no Next.js para atualizar o número de likes de um post no banco de dados.

Começamos criando uma função assíncrona chamada incrementThumbsUp() que recebe um objeto post como parâmetro. Dentro da função, usamos o Prisma para atualizar o número de likes no banco de dados, utilizando o método update e o operador increment.

Também aprendemos a adicionar um comentário no início do arquivo para indicar que estamos lidando com ações do lado do servidor, usando 'use server'.

Por fim, fizemos alguns ajustes no CodeConnect, implementando um link para a página inicial no componente Aside e adicionando ações clicáveis dentro do componente CardPost.

Com isso, estamos prontos para implementar a contagem de likes e os comentários em cada post!

### Aula 01 - Para saber mais: Prisma - Migrations e Relations

#### Migrations

O Prisma oferece duas principais formas de lidar com migrações: prisma migrate dev e prisma migrate prod.

- prisma migrate dev
Utilizado principalmente em ambiente de desenvolvimento:

Cria novas migrações a partir de mudanças no schema Prisma.
Aplica automaticamente as migrações no banco de dados.
Gera arquivos SQL para cada migração.
É ideal para iterar rapidamente sobre o modelo de dados sem a preocupação imediata com a produção.

- prisma migrate prod
Focado em ambientes de produção:

Não gera novas migrações.
Precisa que as migrações sejam geradas antecipadamente (via prisma migrate dev ou manualmente).
Aplica as migrações pendentes no banco de dados de produção de forma segura.
A principal diferença entre os dois modos é que prisma migrate prod é projetado para ser usado em um pipeline de CI/CD, garantindo que as migrações aplicadas sejam revisadas e testadas antes de serem aplicadas em produção.

- Relacionamento um-para-um
No Prisma, um relacionamento um-para-um é representado por duas tabelas que têm uma referência direta entre si. Aqui está um exemplo prático:

```Prisma
model User {
  id        Int @id @default(autoincrement())
  profile   Profile?
}
model Profile {
  id      Int @id @default(autoincrement())
  userId  Int @unique
  user    User @relation(fields: [userId], references: [id])
}
```

Neste exemplo, cada User pode ter no máximo um Profile, e cada Profile está associado a exatamente um User.

- Relacionamento um-para-muitos
Um relacionamento um-para-muitos é talvez o tipo mais comum de relacionamento. Ele permite que um registro em uma tabela esteja associado a múltiplos registros em outra tabela. Veja como isso é feito:

```Prisma
model Post {
  id       Int @id @default(autoincrement())
  title    String
  authorId Int
  author   User @relation(fields: [authorId], references: [id])
}
model User {
  id    Int @id @default(autoincrement())
  posts Post[]
}
```

Neste caso, um User pode ter vários Posts, mas cada Post está vinculado a apenas um User. Exatamente como fizemos no Code Connect.

- Relacionamento muitos-para-muitos
Relacionamentos muitos-para-muitos requerem uma tabela de junção ou intermediária e o Prisma simplifica a criação desses relacionamentos:

```Prisma
model Post {
  id      Int      @id @default(autoincrement())
  title   String
  tags    Tag[]    @relation("PostToTag")
}
model Tag {
  id      Int      @id @default(autoincrement())
  name    String
  posts   Post[]   @relation("PostToTag")
}
// Tabela de junção explícita
model PostToTag {
  post    Post @relation(fields: [postId], references: [id])
  postId  Int
  tag     Tag @relation(fields: [tagId], references: [id])
  tagId   Int
  @@id([postId, tagId])
}
```

Com esse modelo, Posts e Tags podem ter várias instâncias associadas entre si, através de uma tabela de junção chamada PostToTag.

- Auto relacionamento
Vamos mergulhar mais fundo no nosso model de Comment:

```Prisma
model Comment {
  id         Int       @id @default(autoincrement())
  text       String
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt
  authorId   Int
  author     User      @relation(fields: [authorId], references: [id])
  postId     Int
  post       Post      @relation(fields: [postId], references: [id])
  parentId   Int?
  parent     Comment?  @relation("CommentChildren", fields: [parentId], references: [id])
  children   Comment[] @relation("CommentChildren")
}
```

Aqui, cada comentário pode ser pai de outros comentários (children) e, ao mesmo tempo, ser filho de um comentário (parent). Esse padrão é essencial para criar uma árvore de comentários, permitindo uma estrutura de discussão aninhada.

O campo parentId é opcional (Int?), indicando que um comentário pode não ter um comentário pai (ou seja, é um comentário de primeiro nível). A relação @relation("CommentChildren") é usada para vincular parent a children, demonstrando o uso de uma relação nomeada para auto relacionamentos.

O auto relacionamento adiciona uma camada de profundidade e complexidade ao modelo de dados. Ele permite que estruturas recursivas sejam representadas em um banco de dados relacional, sem a necessidade de tabelas adicionais para gerenciar a hierarquia.

Essas estruturas são comuns em aplicações modernas, especialmente onde a interação do usuário e a organização de conteúdo são complexas e aninhadas. A capacidade de modelar tais relações diretamente no banco de dados simplifica o desenvolvimento e a manutenção dessas aplicações.

### Aula 01 - Nessa aula, você aprendeu como`:`

- Evoluir o banco de dados de uma aplicação existente, utilizando o Prisma;
- Criar auto relacionamentos;
- Criar queries do Prisma usando o increment.

## Aula 01 - Server Action e Client Components


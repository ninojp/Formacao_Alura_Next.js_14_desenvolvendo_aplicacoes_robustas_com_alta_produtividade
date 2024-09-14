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

## Aula 02 - Server Action e Client Components

### Aula 02 - Montando o formulário - Vídeo

Nessa aula, começamos a desenvolver o formulário de curtidas (ThumbsUp) para o nosso back-end.

Primeiro, criamos um componente ThumbsUp com uma marcação SVG para o ícone. Depois, criamos um componente IconButton que renderiza um botão com o ícone e recebe as props do botão HTML.

Em seguida, implementamos os estilos do IconButton usando CSS module.

No card post, adicionamos o IconButton dentro de um form para enviar a curtida para o back-end. Também adicionamos um parágrafo para exibir a contagem de likes.

Por fim, ajustamos o layout do card post usando CSS para centralizar o texto da contagem de likes e espaçar os elementos do footer.

### Aula 02 - Enviando Likes - Vídeo

Nessa aula, aprendemos a conectar o botão de curtir ao nosso formulário e implementar a funcionalidade de curtir um post.

Primeiro, usamos a propriedade action do formulário para indicar a server action que será executada ao enviar o formulário.

Depois, usamos o método .bind() para passar o post como parâmetro para a função incrementThumbsUp, que incrementa o número de curtidas do post.

Para garantir que a página seja recarregada após a atualização do número de curtidas, usamos a função revalidatePath() do Next.js.

Essa função permite que o Next.js recarregue a página tanto na homepage quanto na página do post.

### Aula 02 - Estado do Fomulário - Vídeo

Nessa aula, aprendemos a implementar um indicador de carregamento (Spinner) para mostrar à pessoa usuária que a curtida está sendo processada.

Primeiro, criamos um componente Spinner com CSS para o visual do carregamento. Depois, criamos um componente ThumbsUpButton para encapsular o botão de curtir e o Spinner.

Utilizamos o useFormStatus do react-dom para saber se o formulário está sendo submetido. Com isso, podemos exibir o Spinner enquanto o formulário está sendo processado e o botão de curtir fica desabilitado.

Por fim, aprendemos a usar o await new Promise para simular um tempo de espera na função update do lado do servidor, mostrando como o Spinner funciona na prática.

### Aula 02 - Para saber mais: o método bind

#### Mas afinal, o que esse método faz?

O método .bind() é usado para definir o contexto this de uma função, independentemente de como ela é chamada. Em outras palavras, .bind() permite que você fixe ou "amarre" (por isso o "bind") o valor de this para a função, garantindo que ele seja o mesmo, não importa como ou onde a função seja invocada.

JavaScript é uma linguagem de programação muito flexível, mas isso pode levar a problemas de contexto. O valor de this dentro de uma função depende de como a função é chamada. Isso pode causar confusão, especialmente em callbacks e eventos, onde o contexto pode mudar inesperadamente.

#### Tá, mas porque ele foi criado?

O método .bind() está disponível a partir do ECMAScript 5 e foi criado para resolver exatamente esse problema: proporcionar uma maneira de manter o contexto this consistente, independentemente do contexto de execução da função. Isso é útil em situações onde o contexto é faz a diferença na lógica da aplicação, como manipulação de eventos, callbacks assíncronos e quando trabalhamos com classes e métodos em JavaScript (como os Class Components, utilizados em versões mais antigas do React).

Como ele funciona na prática:
Vamos entender como o .bind() funciona:

```JavaScript
const person = {
  name: "João",
  greet: function() {
    console.log("Olá, " + this.name);
  }
};
person.greet(); // Saída: "Olá, João"
const greet = person.greet;
greet(); // Saída: "Olá, " - porque 'this' não está definido fora do contexto de 'person'
```

No exemplo acima, quando chamamos greet() diretamente, o contexto this se perde. Aqui é onde .bind() brilha:

```JavaScript
const boundGreet = person.greet.bind(person);
boundGreet(); // Saída: "Olá, João"
```

Ao usar .bind(person), fixamos o contexto de this para person, garantindo que name seja reconhecido independentemente de como greet é chamada.

#### Casos de uso comuns

Manipulação de eventos: Em frameworks nós frequentemente passamos métodos de um componente como callbacks para eventos. Usar .bind() garante que o método mantenha o contexto correto do componente.

```JavaScript
document.getElementById("meuBotao").addEventListener("click", this.handleClick.bind(this));
```

Callbacks assíncronos: Ao trabalhar com Promises ou funções assíncronas, o .bind() pode ser usado para assegurar que o contexto dentro dos callbacks seja o esperado.

Programação funcional: Aqui o .bind() é útil para criar versões parcialmente aplicadas de funções, permitindo a reutilização de lógicas de função com diferentes contextos.

### Aula 02 - Nessa aula, você aprendeu como`:`

- Revalidar o cache do Next com a função revalidatePath;
- Pré-definir parâmetros usando o método bind;
- Implementar client components e utilizar o hook useFormStatus.

## Aula 03 - Adicioando Comentários

### Aula 03 - Criando a Modal - Vídeo 1

Nessa aula, começamos a construir os componentes para adicionar comentários ao CodeConnect.

Criamos uma modal, que é uma caixa de diálogo, para exibir os comentários. A modal é um componente do lado do cliente, pois precisa de um estado local para controlar se está aberta ou fechada.

Para isso, usamos o hook forwardRef para expor uma referência que permite abrir e fechar a modal.

Criamos métodos closeModal e openModal para controlar o estado da modal.

Também usamos o hook useImperativeHandle para expor esses métodos para quem consumir o componente.

Por fim, criamos um cabeçalho para a modal com um botão de fechar.

O desafio da aula é estilizar a modal para que ela fique como no Figma.

### Aula 03 - Implementando Modal de comentários - Vídeo 2

Nesta aula, aprendemos a implementar uma modal de comentários no nosso projeto Next.js. Começamos adicionando estilos para a modal no arquivo globals.css e modal.module.css.

Em seguida, criamos um novo componente chamado ModalComment que contém a modal e um botão para abri-la. O botão utiliza o componente IconButton com um ícone de chat.

Conectamos a modal ao componente CardPost para que ela seja exibida ao lado do botão de curtir. Para isso, incluímos os comentários na query do banco de dados.

No final, testamos a aplicação e verificamos se a modal está funcionando corretamente.

Agora, vamos continuar construindo os componentes da modal de comentários, como o título, a área de texto e o botão de enviar!

### Aula 03 - Server Actions e Mutations - Vídeo 3


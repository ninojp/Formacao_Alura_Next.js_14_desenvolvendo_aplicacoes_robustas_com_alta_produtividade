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

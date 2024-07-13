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

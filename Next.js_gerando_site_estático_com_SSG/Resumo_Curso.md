# Curso Next.js: gerando site estático com SSG

## Aula 01 - Criando API Router e fazendo o Fetch

### Aula 01 - Apresentação - Vídeo 01

Nessa aula, vamos aprender a transformar uma página dinâmica do nosso e-commerce Meteora em uma página estática, utilizando o poder do Next.js.

O objetivo é melhorar a performance do nosso site, tornando-o mais rápido e eficiente.

Para acompanhar a aula, você precisa ter conhecimento em HTML, CSS, JavaScript e React.

Vamos juntos transformar o Meteora em um site estático e veloz!

### Aula 01 - Demonstração layout e execução em localhost - Vídeo 02

Nessa aula, exploramos a estrutura do projeto do Next.js, que é bem organizada e facilita o desenvolvimento.

Vimos que o package.json descreve as configurações do projeto e as bibliotecas que usamos, enquanto o next.config.mjs configura o provedor externo de imagens.

A pasta src contém os mocks do projeto, que simulam produtos e categorias, e a pasta lib tem um arquivo api.js que facilita a busca por produtos e categorias.

A pasta app é o coração do projeto, onde ficam os componentes como categorias, Footer, Header, Produto, e a página dinâmica produto/[slug], que exibe os detalhes de um produto.

Para rodar o projeto localmente, usamos o comando yarn dev no terminal, que inicia o servidor do Next.js na porta 3000.

Também aprendemos a importância de hospedar as imagens em um projeto separado, como o Meteora Assets, para facilitar o gerenciamento, reduzir o tamanho do projeto e evitar gastos com servidor.

### Aula 01 - Mostar o build e criar uma API router - Vídeo 03

Olá! Nessa aula, aprendemos a criar uma API Route para obter dados de produtos e como integrar essa API com a nossa página inicial do site.

Primeiro, criamos uma API Route dentro do diretório app/api/produtos/route.js. Essa API Route retorna um objeto JSON com todos os produtos, usando o método getTodosProdutos(), que por enquanto está mockado.

Depois, na página page.js, criamos uma função assíncrona fetchProductosApi() que faz um fetch para a API Route e retorna os produtos em formato JSON.

Por fim, modificamos o código da página page.js para usar a função fetchProductosApi() e obter os produtos da API.

Agora, a página inicial do site está acessando os produtos através da API, o que é um passo importante para gerar um site estático.

Lembre-se que ainda temos a página de detalhes do produto que precisa ser transformada em uma rota estática.

### Aula 01 - Melhorando a eficiência de buscar produtos e categorias

Imagine que você está desenvolvendo um e-commerce de produtos geek utilizando Next.js, chamado "GeekStore". Você já configurou a estrutura do projeto, a execução e renderização da aplicação, e agora está focado em implementar as funcionalidades de SSG e SSR para otimizar a entrega de conteúdo. Além disso, você precisa criar um API Router para gerenciar os produtos e categorias de forma dinâmica. Utilizando o código base fornecido, você está encarregado de combinar as informações e criar uma solução eficiente para buscar e exibir produtos e categorias na página inicial do seu e-commerce.

Como você pode combinar as funções fetchProdutosApi e fetchCategoriasApi para otimizar a busca e exibição de produtos e categorias na página inicial do seu e-commerce "GeekStore", garantindo uma implementação eficiente e seguindo as melhores práticas do Next.js?

Resposta: Criar uma função única fetchDadosApi que utiliza Promise.all para buscar produtos e categorias simultaneamente.

```Javascript
async function fetchDadosApi() {
  const produtosPromise = fetchProdutosApi();
  const categoriasPromise = fetchCategoriasApi();
  const [produtos, categorias] = await Promise.all([produtosPromise, categoriasPromise]);
  return { produtos, categorias };
}
```

Esta abordagem é eficiente porque utiliza Promise.all para realizar as buscas de forma paralela, reduzindo o tempo total de espera e seguindo uma prática recomendada para otimizar a performance em aplicações Next.js.

### Aula 01 - Nessa aula, você aprendeu como`:`

- Estruturar um projeto em NextJS 14;
- Executar, renderizar e iniciar uma aplicação com Node 18.17.1+, usando yarn;
- Usar o SSG para produtos e SSR para produto/slug demonstrado;
- Criar um API Router no Next.js para dinamizar o e-commerce.

## Aula 02 - API Router para detalhes do produto

### Aula 02 - Criar API router para detalhes do produto - Vídeo 1

Nessa aula, aprendemos a criar um API Router para obter os detalhes de um produto específico.

Migramos o endpoint de detalhes do produto para o API Router, para que possamos acessar os detalhes do produto através de um HTTP request.

Criamos um diretório chamado "produto" dentro de "src > app > api" e, dentro dele, criamos uma rota dinâmica [slug] para representar o ID do produto.

Dentro de [slug], criamos um arquivo chamado route.js, onde implementamos a lógica para buscar o produto com base no ID passado na URL.

Utilizamos o mock getTodosProdutos para obter a lista de produtos e, através do método find, buscamos o produto com o ID correspondente ao slug passado na URL.

Se o produto não for encontrado, retornamos um status 404. Caso contrário, retornamos o produto em formato JSON.

Ao final, verificamos se o API Router está funcionando corretamente, acessando a rota dinâmica no navegador.

Essa aula foi importante para entendermos como criar um API Router para obter dados específicos e como utilizar rotas dinâmicas no Next.js.

### Aula 02 - Migrar API de detalhes de produtos para API externa - Vídeo 1

### Aula 02 -  - Vídeo 1

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

### Aula 02 - Migrar API de detalhes de produtos para API externa - Vídeo 2

Nessa aula, aprendemos a migrar a API de detalhes do produto para uma API externa, utilizando o API Router do Next.js.

Primeiro, removemos o mock de getProdutoPorSlug e criamos uma função assíncrona getProduto que recebe o slug como parâmetro.

Em seguida, fizemos um fetch para a API Router de produtos, utilizando um template literals para construir a URL dinamicamente.

Depois, criamos uma constante produto que recebe o resultado do res.json(), que é o produto em formato JSON.

Por fim, atualizamos a função ProdutoPage para usar a nova função getProduto e passamos o slug como parâmetro.

Com essa mudança, a página de detalhes do produto agora é renderizada dinamicamente, consumindo dados da API externa.

A aula também destaca a importância de gerar conteúdo estático para otimizar o desempenho do site, e que o servidor não deve ser usado para servir a API Router de detalhes do produto.

### Aula 02 - Migrar mock de produto para endpoint externo - Vídeo 3

Nessa aula, aprendemos a migrar o mock de produto para um endpoint externo, utilizando o serviço n:point. Isso é importante para que possamos gerar um site estático com o Next.js, pois o API Router não estará disponível durante o build.

Primeiro, criamos um JSON Bin no n:point e copiamos os dados do mock de produtos para ele. Em seguida, atualizamos o endpoint do fetch na página de produtos e na página de detalhes do produto para o novo endereço do n:point.

Por fim, removemos o API Router de produtos do projeto, pois ele não é mais necessário.

Com essa mudança, nosso site estático será gerado com os dados dos produtos vindos de um endpoint externo, garantindo que o site funcione corretamente mesmo sem um servidor rodando.

### Aula 02 - O npoint atualiza página - Vídeo 4

Nessa aula, aprendemos a atualizar a página de detalhes do produto usando o endpoint da API.

Primeiro, atualizamos a URL do fetch na página page.jsx para usar o endpoint da API. Depois, modificamos a lógica para buscar todos os produtos e, em seguida, filtrar o produto específico usando o slug.

Por fim, removemos o Router API de produto, pois não precisamos mais dele.

Essa foi apenas uma etapa para gerar a página estática. No próximo vídeo, vamos aprender como fazer isso!

### Aula 02 - Migrando para um serviço externo: SSR em detalhes do produto

Imagine que você é uma pessoa desenvolvedora e trabalha em um projeto de ecommerce que utiliza Next.js para a criação de uma aplicação web. Recentemente, seu time decidiu migrar o endpoint de produtos para um serviço externo, visando melhorar a performance e a atualização dos dados dos produtos. Com essa mudança, você foi encarregado(a) de atualizar a página de detalhes do produto para consumir dados do novo endpoint externo.

Considerando a migração para um serviço externo e a necessidade de atualizar a página de detalhes do produto para usar este novo endpoint, qual seria a melhor maneira de modificar a função getProduto para garantir que os dados do produto sejam buscados do novo serviço externo?

Resposta:  
Modificar a URL dentro da função getProduto para apontar para o novo serviço externo, mas manter a chamada API no lado do cliente.

```JavaScript
async function getProduto(slug) {
  const res = await fetch(`https://api.npoint.io/novoEndpoint/produto/${slug}`);
  const produto = await res.json();
  return produto;
}
```

Esta a maneira correta de atualizar o API router para o novo endpoint, atualizando a URL para o novo serviço externo, não sendo necessário usar o getServerSideProps.

### Aula 02 - Nessa aula, você aprendeu como`:`

- Criar API SSR para detalhes do produto: demonstramos a criação e transformação de uma API de detalhes de produto em SSR no Next.js, mostrando práticas de SSR em APIs após yarn build;
- Migrar para serviço externo: migramos o endpoint de produtos para o n:point, incluindo transferência de JSON, remoção do API Router e atualização do endpoint;
- Atualização da página de produto: atualizamos a página de produto para usar um endpoint externo, assegurando dados atualizados de uma fonte externa. O objetivo principalmente é trabalhar na estratégia de utilizar uma fonte de dados externa para alimentar nossa aplicação e facilitar a geração estática do site.

## Aula 03 - A caminho do SSG

### Aula 03 - Aplicar o generateStaticParams - Vídeo 1

Nessa aula, aprendemos como gerar um site estático com o Next.js usando o generateStaticParams.

Antes, usávamos o getStaticPaths para gerar páginas estáticas, mas agora, com o generateStaticParams, o processo ficou muito mais simples!

O generateStaticParams é uma função que permite gerar páginas estáticas de forma dinâmica, ou seja, podemos gerar páginas para cada produto da nossa loja, por exemplo.

Para usar o generateStaticParams, precisamos criar uma função assíncrona que faz um fetch para a API externa de produtos e retorna um array de objetos com os IDs dos produtos.

Depois, podemos usar o map para iterar sobre esse array e gerar um objeto para cada produto, com a propriedade slug contendo o ID do produto.

Com isso, o Next.js gera páginas estáticas para cada produto, que podem ser hospedadas em qualquer servidor web.

### Aula 03 - Estrutura assets estáticos no Next.js - Vídeo 2

Nessa aula, aprendemos como gerar arquivos estáticos com o Next.js, utilizando a configuração output: 'export' no arquivo next.config.mjs. Essa configuração permite que o Next.js gere um diretório com arquivos HTML, CSS e JavaScript para cada página da aplicação, facilitando a compreensão da estrutura do projeto e o deploy em plataformas como a Vercel.

Vimos também que o Next.js, por padrão, gera um diretório .next com uma estrutura otimizada para performance, mas que pode ser difícil de entender. A configuração output: 'export' nos permite gerar um diretório "out" (ou outro nome que você escolher) com arquivos mais simples e fáceis de entender.

Na próxima aula, vamos testar se os arquivos gerados realmente funcionam no navegador!

### Aula 03 - Faça como eu fiz

Agora é a sua vez! Após assistir ao vídeo onde ensinei como usar o generateStaticParams e o output: export, seu desafio é aplicar esses conceitos. Recrie o processo em seu próprio projeto, configurando adequadamente para gerar páginas estáticas.

Podemos dividir em alguns passos:

- Crie a função generateStaticParams mapeando cada produto;
- Altere adicione a configuração do Next o output: export.

Se precisar consultar o código modificado, consulte [aqui no Github](https://github.com/alura-cursos/3500-meteora-ecommerce-next-14/compare/aula-2...aula-3). Através dessa comparação, você consegue visualizar as alterações específicas realizadas durante a aula.

### Aula 03 - Nessa aula, você aprendeu como`:`

Aplicar o generateStaticParams para que seja possível gerar páginas estáticas para cada rota da dinâmica de detalhe do produto;
O build gera o site estático em .Next/static, onde esses arquivos não são facilmente mapeados para os componentes e páginas individuais, pois são otimizados, divididos em chunks (fragmentos) e minificados;
O "output export" no next.config.js, muda a forma de geração de como o Next.js deve tratar a geração e a disposição dos arquivos estáticos, especialmente para rotas dinâmicas, onde exporta os arquivos estáticos de uma forma mais clássica, onde podemos servir os sites em qualquer servidor web de forma simples.

## Aula 04 - Testando arquivos estáticos

### Aula 04 - Abrir os arquivos estáticos no navegador - Vídeo 1

Nessa aula, aprendemos como abrir o arquivo estático gerado pelo Next.js no navegador. Usamos o Live Server para abrir o arquivo index.html, mas encontramos alguns problemas: os estilos e as imagens não estavam sendo exibidos corretamente.

Isso aconteceu porque o Live Server não consegue localizar os arquivos CSS e JavaScript dentro do diretório /out, onde os arquivos estáticos são gerados.

Para resolver esse problema, configuramos a opção assetPrefix no arquivo next.config.mjs, informando ao Live Server que todos os arquivos estão localizados dentro do diretório /out.

Após essa configuração, recompilamos o projeto com yarn build e, ao abrir o arquivo index.html no navegador, os estilos CSS foram carregados corretamente.

Ainda falta ajustar a renderização das imagens, mas já estamos um passo mais perto de ter um site estático funcionando!

### Aula 04 - Configurar as alterações de links dos assets - Vídeo 2

Essa aula é sobre como configurar as URLs dos seus arquivos estáticos no Next.js para que elas fiquem mais limpas e padronizadas.

Primeiro, a gente aprende que ao gerar um site estático, toda vez que você muda um arquivo, precisa gerar os arquivos estáticos novamente para que as mudanças apareçam no site.

Depois, a gente descobre que a URL dos arquivos estáticos gerados pelo Next.js não é tão amigável, e que podemos usar a configuração trailingSlash no arquivo next.config.js para padronizar as URLs.

Com essa configuração, a URL do arquivo produto/1.html vai ficar produto/1, o que é muito mais limpo e fácil de entender.

### Aula 04 - Loader de imagem customizado - Vídeo 3

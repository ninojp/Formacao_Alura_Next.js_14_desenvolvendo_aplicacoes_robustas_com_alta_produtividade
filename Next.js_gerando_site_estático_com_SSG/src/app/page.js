import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";
import { getCategorias } from "../lib/api";

async function fetchProdutosApi() {
  // const res = await fetch('http://localhost:3000/api/produtos');
  const res = await fetch('https://api.npoint.io/bf0b3b61400b08f28bee/produtos');
  if(!res.ok){
    throw new Error('Não foi possivel obter os dados na api!')
  };
  const produtos = res.json();
  return produtos;
};

async function fetchCategoriasApi(){
  const resposta = await fetch('https://api.npoint.io/9e39eab94ad2516f0962/categorias');
  if(!resposta.ok){
    throw new Error('Não foi possivel obter dados da API!(categorias)')
  };
  const categorias = resposta.json();
  return categorias;
}

export default async function Home() {
  // const produtos = getTodosProdutos();
  const produtos = await fetchProdutosApi();
  // const categorias = getCategorias();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}

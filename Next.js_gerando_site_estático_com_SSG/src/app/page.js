import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";
import { getCategorias, getTodosProdutos } from "../lib/api";

async function fetchProdutosApi() {
  const res = await fetch('http://localhost:3000/api/produtos');
  if(!res.ok){
    throw new Error('Não foi possivel obter os dados')
  };
  const produtos = res.json();
  return produtos;
}

export default async function Home() {
  // const produtos = getTodosProdutos();
  const {produtos} = await fetchProdutosApi();
  const categorias = getCategorias();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}

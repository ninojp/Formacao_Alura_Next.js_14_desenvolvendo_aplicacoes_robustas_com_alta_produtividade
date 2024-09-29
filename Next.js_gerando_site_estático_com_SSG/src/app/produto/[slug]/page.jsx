import styles from "./page.module.css";
import Produto from "@/app/components/Produto";
// import { getProdutoPorSlug } from "../../../lib/api";

async function getProduto(slug){
  // const res = await fetch(`http://localhost:3000/api/produto/${slug}`);
  const res = await fetch('https://api.npoint.io/bf0b3b61400b08f28bee/produtos');
  const produtos = await res.json();
  const produto = produtos.find((produto) => produto.id.toString() === slug)
  return produto;
}

export default async function ProdutoPage({ params }) {
  // const produto = getProdutoPorSlug(params.slug);
  const produto = await getProduto(params.slug);
  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}

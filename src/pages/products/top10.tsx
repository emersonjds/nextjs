import { GetStaticProps } from "next";

import { Title, TextProduct } from "../../styles/pages/Home";

interface IProduct {
  id: number;
  productName: string;
  price: number;
}

interface ProductProps {
  products: IProduct[];
}

export default function Top10({ products }: ProductProps) {
  return (
    <div style={{ padding: "2em" }}>
      <ul>
        <Title>Produtos</Title>
        {products.map((product) => (
          <li key={product.id}>
            <TextProduct>{product.productName}</TextProduct>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const response = await fetch("http://localhost:3333/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};

import { GetStaticProps } from "next";


interface IProduct {
    id: number;
    productName: string;
    price: number;
}

interface ProductProps {
    products: IProduct[]
}

export default function Top10({ products }: ProductProps) {
    return (
        <div>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            <span>
                                {product.productName}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
    const response = await fetch('http://localhost:3333/products')
    const products = await response.json()

    return {
        props: {
            products
        }
    }
}


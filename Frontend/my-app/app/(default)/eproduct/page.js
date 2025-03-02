import Link from "next/link";


async function getProducts(){
    const response = await fetch('http://localhost:5000/product');
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
}

export default async function eproduct() {
    const data = await getProducts();
    const products = data.products;
  return (
    <div>
        {
            products.map((product) =>(
                <li key = {product.id}>
                    <Link href={`eproduct/${product.id}`}>{product.title}</Link>
                </li>
            ))
        }
    </div>
  )
}

import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:5000/product");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function ProductsPage() {
  const data = await getProducts();
  const products = data.products; 

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-outline" >
                  <Link href={`product/${product.id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

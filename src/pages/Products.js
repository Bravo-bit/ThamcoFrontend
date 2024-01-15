import { Suspense } from 'react';
import { Await, json, useLoaderData } from 'react-router-dom';
import ProductList from "../components/Product/ProductList";

function ProductPage() {

  const products = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={products}>
        {(loadedProducts) => <ProductList products={loadedProducts} />}
      </Await>
    </Suspense>
  );

}

export default ProductPage;

export async function loader() {

  const response = await fetch("http://localhost:8080/products", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw json({ message: "Something went wrong" }, { status: 500 });
  } else {
    const responseData = await response.json();
    return responseData
  }

}
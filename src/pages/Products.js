import { useLoaderData } from "react-router-dom";
import ProductList from "./ProductList";

function ProductPage() {

  const products = useLoaderData();

  return <ProductList products={products}></ProductList>

}

export default ProductPage;

export async function loader() {

  const response = await fetch("https://undercutters.azurewebsites.net/Help/Api/GET-api-Product_category_id_category_name_brand_id_min_price_max_price");

  if (!response.ok) {

  } else {
    const responseData = await response.json();
    return responseData.products;
  }

}
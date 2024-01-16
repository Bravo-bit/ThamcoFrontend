import { useState } from "react";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import ProductFilter from "./ProductFilter"

function ProductList({ products }) {

    const productList = products.map((product) => (
        <ProductItem
            key={product.productId}
            productId={product.productId}
            productEan={product.productEan}
            categoryName={product.category.categoryName}
            brandName={product.brand.brandName}
            productName={product.productName}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
            productInStock={product.productInStock}
            productExpectedRestock={product.productExpectedRestock}
        />
    ));

    const [filteredProducts, setFilteredProducts] = useState(productList);

    const handleFilterChange = ({ name }) => {
        const filtered = productList.filter(
            (product) => product.props.productName.toLowerCase().includes(name)
        );
        setFilteredProducts(filtered);
    };

    return (
        <>
            <section className={styles.products}>
                <ProductFilter onFilterChange={handleFilterChange} />
                <Card>
                    <ul>{filteredProducts}</ul>
                </Card>
            </section>
        </>
    );
}

export default ProductList
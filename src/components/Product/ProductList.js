
import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";


function ProductList({ products }) {

    const productList = products.map((product) => (
        <ProductItem
            key={product.productId}
            id={product.productId}
            productEan={product.productEan}
            categoryId={product.categoryId}
            brandId={product.brandId}
            productName={product.productName}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
            productInStock={product.productInStock}
            productExpectedRestock={product.productExpectedRestock}
        />
    ));

    return (
        <>
            <section className={styles.products}>
                <Card>
                    <ul>{productList}</ul>
                </Card>
            </section>
        </>
    );
}

export default ProductList
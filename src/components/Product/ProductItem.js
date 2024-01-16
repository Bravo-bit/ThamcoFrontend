import React, { useContext } from 'react';
import ProductItemForm from './ProductItemForm';
import styles from './ProductItem.module.css';
import CartContext from '../store/cart-context';

function ProductItem(props) {
    const cartCtx = useContext(CartContext);
    const price = `$${props.productPrice.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            productId: props.productId,
            productEan: props.productEan,
            categoryName: props.categoryName,
            brandName: props.brandName,
            productName: props.productName,
            productDescription: props.productDescription,
            productInStock: props.productInStock,
            productExpectedRestock: props.productExpectedRestock,
            price: props.productPrice,
            amount: amount
        });
    };

    return (
        <li className={styles.product}>
            <div>
                <h3>{props.productName}</h3>
                <div className={`${styles.productEan} ${styles.description}`}>ID : {props.productId}</div>
                <div className={`${styles.productEan} ${styles.description}`}>EAN : {props.productEan}</div>
                <div className={`${styles.categoryId} ${styles.description}`}>Category Name : {props.categoryName}</div>
                <div className={`${styles.brandId} ${styles.description}`}>Brand Name : {props.brandName}</div>
                <div className={`${styles.productDescription} ${styles.description}`}>Description : {props.productDescription}</div>
                <div className={styles.price}>Price : {price}</div>
                <div className={`${styles.productInStock} ${styles.description}`}>Stock : {props.productInStock}</div>
                <div className={`${styles.productExpectedRestock} ${styles.description}`}>Restock : {props.productExpectedRestock}</div>
            </div>
            <div>
                <ProductItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default ProductItem;
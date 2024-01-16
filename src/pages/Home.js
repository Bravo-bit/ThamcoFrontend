import styles from "./styles/Home.module.css"

function HomePage() {

    return (
        <div className={styles['about-us-container']}>
            <p>Welcome to Thamco, where our mission is to provide a seamless and reliable shopping experience for our valued customers. As a dynamic company, we specialize in sourcing high-quality products from approved third-party suppliers to ensure our customers receive the best in class. Our commitment extends beyond just selling products; we are dedicated to creating a thriving online community of registered customers through our user-friendly web app. At Thamco, we believe in transparency, quality, and customer satisfaction, making us your trusted destination for all your shopping needs. Explore a world of convenience and discover exceptional products with us!</p>
            <p>You can browse our products by clicking on "Products" or/and sign in by clicking "Log in"</p>
        </div>
    );
}

export default HomePage;
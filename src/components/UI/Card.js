import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}><br></br>{props.children}</div>
  );
};

export default Card;
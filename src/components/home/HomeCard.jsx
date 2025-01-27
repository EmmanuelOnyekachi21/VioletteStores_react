import { BASEURL } from "../../api";
import styles from "./HomeCard.module.css";
// import { Link } from "react-router-dom";

const HomeCard = ({product}) => {
  return (
    <div className={`col-md-3 ${styles.col}`}>
      {/* <Link to={`/product/${product.slug}`} style={{textDecoration: 'none'}}> */}
      <a href={`/product/${product.slug}`} style={{textDecoration: 'none'}}>
        <div className={styles.card}>
          <div className={styles.cardImgWrapper}>
            <img src={`${BASEURL}${product.image}`} className={styles.cardImgTop} alt="Product Image" />
          </div>
          <div className={styles.cardBody}>
            <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
            <h6 className={styles.cardText}>{`$${product.price}`}</h6>
          </div>
        </div>
        </a>
      {/* </Link> */}
    </div>
  );
};

export default HomeCard;

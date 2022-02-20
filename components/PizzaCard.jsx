import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({pizza}) =>{
    // console.log(pizza); how many times we have mapped that many object will be visible in the console.
    return(
        <Link href={`/product/${pizza._id}`} passHref>
            <div className={styles.container}>
                <Image src={pizza.img} alt="product-img" width="500" height="500" />
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>${pizza.prices[0]}</span>
                <p className={styles.desc}>
                    {pizza.desc}
                </p>
            </div>
        </Link>
    );
}

export default PizzaCard;
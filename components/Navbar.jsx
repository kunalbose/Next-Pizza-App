import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from "react-redux";

const Navbar = ()=>{
    const quantity = useSelector((state) => state.cart.quantity)

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="telephone-img" height="32" width="32"/>
                </div>

                <div className={styles.texts}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>6372924644</div>
                </div>

            </div>    

            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href={`/`} passHref>
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <Link href={`/admin`}>
                        <li className={styles.listItem}>Admin</li> 
                    </Link>
                    <Link href={`/admin/login`}>
                        <li className={styles.listItem}>Log In</li> 
                    </Link>
                   <Link href={`/`} passHref>
                        <Image className={styles.logoImage} src="/img/kblogo.png" alt="kb-logo" width="160px" height="96px" />
                   </Link>
                   <li className={styles.listItem}>Events</li> 
                   <li className={styles.listItem}>Blog</li> 
                   <li className={styles.listItem}>Contact</li> 
                </ul>
            </div>           
            
            <div className={styles.item}>
                <Link href={`/cart`} passHref>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="cart" width="30px" height="30px"/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </Link>
            </div>           
        </div>
    );
}


export default Navbar;
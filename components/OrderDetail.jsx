import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder, setCash }) =>{
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState(false);

    const handleClick = () =>{
        if(total && customer && address){
            createOrder({ customer, address, total, method : 0 })
        }else{
            setError(true);
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.close} onClick={()=>setCash(false)}>X</span>
                <h1 className={styles.title}>You will pay ${total} after delivery</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name Surname</label>
                    <input
                        placeholder="John Doe"
                        type="text"
                        className={styles.input}
                        onChange={(e)=>setCustomer(e.target.value)} 
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <textarea
                        rows={5}
                        placeholder="Pmec Berhampur"
                        type="text"
                        className={styles.textarea}
                        onChange={(e)=>setAddress(e.target.value)} 
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order
                </button>
                {error && <span className={styles.warningMsg}>Add something in the cart!/Enter all details</span>}
            </div>
        </div>
    );
};

export default OrderDetail;
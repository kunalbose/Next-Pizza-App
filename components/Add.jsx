import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setClose })=>{
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);
    // warning for displaying the warning if all the fields are not filled
    const [warning, setWarning] = useState(false);

    const changePrice = (e, index) =>{
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    }

    const handleExtraInput = (e) => {
        setExtra({
            ...extra, 
            [e.target.name]: e.target.value,
        });
    };

    const handleExtra = (e) =>{
        setExtraOptions(prev => [...prev, extra]);
    };

    const handleCreate = async () => {
        if(file){
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "uploads");
            try{
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dltfoan3a/image/upload", data);
            // console.log(uploadRes.data); working fine, receive secure url to store in database.
            const { url } = uploadRes.data;
            if(title && desc && prices && extraOptions && url){
                const newProduct = {
                    title,
                    desc,
                    prices,
                    extraOptions,
                    img: url
                };
                await axios.post("http://localhost:3000/api/products", newProduct);
                setClose(true);
            }else{
                setWarning(true);
            }
            }catch(err){
                console.log(err);
            }
        }else{
            setWarning(true);
        }  
    };


    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.close} onClick={()=>setClose(true)}>X</span>
                <h1>Add New Pizza</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an Image</label>
                    <input
                        type="file"
                        onChange={(e)=>setFile(e.target.files[0])}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input 
                        className={styles.input}
                        type="text"
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Desc</label>
                    <textarea
                        rows={4}
                        type="text"
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="Small"
                            onChange={(e)=>changePrice(e,0)}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="Medium"
                            onChange={(e)=>changePrice(e,1)}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="Large"
                            onChange={(e)=>changePrice(e,2)}
                        />
                    </div>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="text"
                            placeholder="Item"
                            name="text"
                            onChange={handleExtraInput}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="price"
                            name="price"
                            onChange={handleExtraInput}
                        />
                        <button onClick={handleExtra} className={styles.extraButton}>Add</button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map(option =>(
                            <span key={option.text} className={styles.extraItem}>{option.text} ${option.price}</span>
                        ))}
                    </div>
                </div>
                <button onClick={handleCreate} className={styles.addButton}>Create</button>
                {warning && <span className={styles.warningMsg}>Please enter all the fields to create the Pizza!</span>}
            </div>
        </div>
    );
}

export default Add;
import styles from "../styles/LogoutButton.module.css";
import cookie from 'cookie';
import { useRouter } from "next/router";
import axios from "axios";

const LogoutButton = ()=>{
    const router = useRouter();
    
    const handleLogout = async()=>{
        await axios.post("http://localhost:3000/api/logout");
        router.push('/admin/login');
    };

    return(
        <div onClick={handleLogout} className={styles.container}>
            Log Out
        </div>
    );
}

export default LogoutButton;


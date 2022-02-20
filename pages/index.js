import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import LogoutButton from "../components/LogoutButton";


export default function Home({pizzaList, admin}) {
  // console.log(pizzaList); // it is destructured and what we get is an array of objects
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza restaurant in Berhampur</title>
        <meta name="description" content="best pizza shop in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      {admin && <LogoutButton/>}
      <PizzaList pizzaListProp={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}


export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if(myCookie.token === process.env.TOKEN){
    admin = true;
  }
  
  const res = await axios.get("http://localhost:3000/api/products"); //gives an array of objects(all the items in the database(find function))
  return {
    props: {
      pizzaList : res.data,
      admin,
    }
  }
}

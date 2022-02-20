import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaListProp}) =>{
    // console.log(pizzaListProp);
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>The Best Pizza In Town!</h1>
            <p className={styles.desc}>
                What's better than having a crispy melty pizza, you ask?
                Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.
                With KB's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning
                the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs
                to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one
                now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, 
                light-on-the-pocket pizza at your doorstep.
                There is something for everyone here. The vegetarians, non-vegetarians, the sides' lovers and also the ones who love to have 
                something sweet by the time they reach the last bite of the last slice of pizza slice.
            </p>
            <div className={styles.wrapper}>
                {pizzaListProp.map((pizza) =>(
                       <PizzaCard key={pizza._id} pizza={pizza} /> //each pizza item in db is assigned a unique id by mongoDb 
                    ))}
            </div>
        </div>
    );
}

export default PizzaList;
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];



  function Pizza({pizzaObject}){
    console.log(pizzaObject);

    //if(pizzaObject.soldOut) return null; 

    return <li className={`pizza ${pizzaObject.soldOut ?"sold-out": ""}`}> 
        <img src={pizzaObject.photoName} alt={pizzaObject.name} />
        <div>

            <h3>{pizzaObject.name}</h3>
            <p>{pizzaObject.ingredients}</p>

            <span>{pizzaObject.soldOut? "Sold out" :pizzaObject.price}</span>
        </div>
        </li>
} 
function App(){

    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
}

 

function Header(){

   
    return <header className="header">
        <h1>Fast React Co.</h1>
    </header>
}

function Menu(){

    const pizzas = pizzaData;
    const numberpizzars = pizzas.length;
    return <main className="menu">
        <h2>Our Menu</h2>

        {numberpizzars >0 ? (
          
          <>
            <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
            <ul className="pizzas">
            {pizzaData.map(pizza =>
            (<Pizza pizzaObject={pizza} key={pizza.name}/>))}
        </ul>
          </>
        ): (<p>we still working on our menu please come back later !!</p>) 
        }
        
        {/*<Pizza name='Pizza' ingredient='Ingredients: Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price='10'/>
        <Pizza name= "Pizza Salamino" ingredient ="Tomato, mozarella, and pepperoni" price= "15" photoName= "pizzas/salamino.jpg" />
*/}
    </main>
}

function Footer(){
  const hour = new Date().getHours();
  console.log(hour);
  const openhour = 10;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);
  
  //if (!isOpen) return(<p>we're happy to welcome you between 10:00 and 22:00 </p>)
    return<footer className="footer">
        {isOpen ? (
            <Order  closehours={closehour} openhours={openhour}/>
        ): (
          <p>we're happy to welcome you between 10:00 and 22:00 </p>
        )
        
        }
    </footer>
}
function Order({closehour, openhour}){
return <div className="order">
  <p>we're open from {openhour} to {closehour}:00. Come visit us or order online. </p>

  <button className="btn">Order Now</button>
</div>

} 

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
    <App />
    
</React.StrictMode>)


 
import { Link } from "react-router";
import { useState } from "react";
import './main.css';
import { NavLink } from "react-router";
import Maruthi from '../assets/maruthi.jpg';
import Hyndai from '../assets/hyndai.jpg';
import HondaCity from '../assets/hondacity.jpg';
import Skoda from '../assets/Skoda.jpg';
import Toyato from '../assets/toyato.jpg';
import kia from '../assets/kia.jpg';
function Car3() {
    const [search,setsearch]=useState("");
    const[sort,setSort]=useState("");
  const data=[
    {
image:HondaCity,
hatch:"Sedan",
cartitle:"Honda City",
seat:"5 seats,Petrol Automatic",
rupee:"Rs.2,800/day",
price:2800,
book:"Book"
  },
 {
image:Skoda,
hatch:"Sedan",
cartitle:"Skoda Slavia",
seat:"5 seats,Petrol Automatic",
rupee:"Rs.3,200/day",
price:3200,
book:"Book"
  }]
 const result=data.filter((car)=>{
  return car.cartitle.toLowerCase().includes(search.toLowerCase());
 });
result.sort((a, b) => {
  if (sort === "low") {
    return a.price - b.price;
  }

  if (sort === "high") {
    return b.price - a.price;
  }

  return 0;
});
  return (
<>
            <header>
        <h1>Car Rental System</h1>

            <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cars" className="car-link">Car</NavLink>
          <NavLink to="/book">Book Now</NavLink>
        <NavLink  to="/about">About</NavLink>
         <NavLink  to="/contact">Contact</NavLink>
        </nav>
      </header>

     <section className="singing">
      <NavLink to="/cars"> <button>All</button></NavLink>  
         <NavLink to="/car2"> <button>Hatchback</button></NavLink>
         <NavLink to="/car3"><button>Sedan</button></NavLink> 
         <NavLink to="/car4"><button>SUV</button></NavLink>
   <NavLink to="/car5">  <button>MPV</button></NavLink>
      
      </section>
      <section className="search">
        <input type="text" placeholder="Search a car, eg. Swift" value={search} onChange={(e)=>setsearch(e.target.value)}/>

      <select value={sort} onChange={(e)=>setSort(e.target.value)}>
          <option value="">Sort by</option>
              <option value="low">Price: low to high</option>
 <option value="high">Price: high to low</option>
        </select>
      </section>

            <section>
 <div id="container"> 
  {result.map((car) => (
    <div key={car.cartitle}>
       <img src={car.image} alt={car.cartitle} />
      <p>{car.hatch}</p>
      <h4>{car.cartitle}</h4>
      <p>{car.seat}</p>
      <h4>{car.rupee}</h4>
     <NavLink to="/book">
    <button>{car.book}</button>
  </NavLink>
    </div>
  ))}
</div>
</section>
      <footer>
        <p>@ 2026 Drivo Car Renrtal. All rights reserved.</p>
      </footer>
 </>
  )
}

export default Car3;

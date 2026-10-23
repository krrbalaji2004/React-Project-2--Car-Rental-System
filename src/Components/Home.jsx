import { Link,NavLink } from "react-router";
import Maruthi from '../assets/maruthi.jpg';
import Hyndai from '../assets/hyndai.jpg';
import HondaCity from '../assets/hondacity.jpg';
import './main.css';
import { useState } from "react";
function Home() {

  const [city,setcity]=useState("Chennai");
  const [pickupdate,setpickupdate]=useState("");
  const [returndate,setreturndate]=useState("");
  const [cartype,setcartype]=useState("AnyType");
  const [filtercar,setfiltercar]=useState([]);
 

  const data = [
    {
      img: Maruthi,
      name: "Maruti Swift",
      type:"Hatchback",
      button: "Book"
    },
    {
      img: Hyndai,
      name: "Hyundai",
      type:"SUV",
      button: "Book"
    },
    {
      img: HondaCity,
      name: "Honda",
      type:"Sedan",
      button: "Book"
    }
  ];

 const main=[
  {
    head:"Full insurance included",
    para:"Every booking covers, damage and third party liability"
  },
  {
    head:"Prices with no extras",
    para:"The price you see the price you pay taxes includes"
  },
  {
      head:"Free cancellation",
    para:"Change your plans up to 24 hours before pickup."
  },{
      head:"Roadside help",
    para:"A real person answers, any hour, any road."
  }
]
function handle(e){
      e.preventDefault();
      if(!pickupdate||!returndate){
        alert("Please Select pickup and return date")
        return;
      }
      if(new Date(returndate)<=new Date(pickupdate)){
        alert("Return date must be after pickup Date")
        return;
      }
      const result=data.filter((car)=>{
        return cartype==="AnyType"||car.type===cartype;
      })
      setfiltercar(result)
      setsearch(true)
    }

  function savecar(car){
    localStorage.setItem("car",JSON.stringify(car))
  }
  return ( 
    <>
      <header>
        <h1>Car Rental System</h1>

            <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cars">Car</NavLink>
  <NavLink to="/book">Book Now</NavLink>
        <NavLink  to="/about">About</NavLink>
         <NavLink  to="/contact">Contact</NavLink>
        </nav>
        
      </header>

      <section className="rest">
        <h2>
          Pick up the Keys in <br /> minutes
        </h2>

        <p>
          Clean, insured cars at clear daily prices.
          No deposit surprises, free <br></br>cancellation up to
          24 hours before pickup.
        </p>
<Link to="/cars">
  <button type="button">Browse cars</button>
</Link>
      </section>

      <section className="finished">
        <form className="part" onSubmit={handle}>
          <div>
          <label>Pickup City</label>
          <select value={city} onChange={(e)=>setcity(e.target.value)}>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Madurai">Madurai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          </div>
          <div>
          <label htmlFor="">Pickup date</label>
          <input type="date" value={pickupdate} onChange={(e)=>setpickupdate(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="">Return date</label>
          <input type="date" value={returndate} onChange={(e)=>setreturndate(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="">Car Type</label>
          <select
  value={cartype}
  onChange={(e) => setcartype(e.target.value)}
>
            <option value="Any Type">Any Type</option>
            <option value="HatchBack">HatchBack</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="MPV">MPV</option>
          </select>
          </div>
<button type="submit" id="rest">
  Find Cars
</button>
        
        </form>
      </section>

      <section className="painting">
        <h2>Popular this week</h2>
<p>Most boooked cars, ready for pickup</p>
   <div id="container">
  {data.map((car) => (
    <div key={car.name}>
      <img src={car.img} alt={car.name}/>
      <h4>{car.name}</h4>
      <Link to="/book"> 
      <button onClick={() => {
  savecar({
    name: car.name,
    img: car.img,
    type: car.type,
    price: car.name === "Maruti Swift" ? 1800 :
           car.name === "Hyundai" ? 2000 : 2800
  });
  window.location.href = "/book";
}}>
  {car.button}
</button>
      </Link>
     
    </div>
  ))}
  </div>
      </section>

      <section className="mark">
        <h2>Why rent with Drivo</h2>
        <p>The things that usually go wrong with rentals, handled</p>
        <div id="partner">
          {main.map((lack)=>(
            <div key={lack.head}>
            <h4>{lack.head}</h4>
            <p>{lack.para}</p>
        </div>
         ))}
         </div>
      </section>
            <footer>
        <p>@ 2026 Drivo Car Rental. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;

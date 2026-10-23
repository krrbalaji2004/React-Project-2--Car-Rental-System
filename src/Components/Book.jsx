import { useState } from 'react';
import './main.css';
import { NavLink } from 'react-router';
function Book() {
  const car=JSON.parse(localStorage.getItem("car"));
  const [selectcar,setselectcar]=useState(JSON.parse(localStorage.getItem("car"))||null);
  const [pickup, setPickup] = useState("");

const [returnDate, setReturnDate] = useState("");

  const [price,setPrice]=useState(JSON.parse(localStorage.getItem("car"))?.price||1800);


  const [childSeat,setChildSeat]=useState(false);
  const [gps,setGPS]=useState(false)
  const [driver,setDriver]=useState(false);
  let add=0;
  if(childSeat){
    add=add+300;
  }
  if(gps){
    add=add+500;
  }
  if(driver){
    add=add+700;
  }
let main = 0;

if (pickup && returnDate) {
  main = (new Date(returnDate) - new Date(pickup)) / (1000 * 60 * 60 * 24);
}
let dayscount=Math.max(0,main);
let total = (price + add) * dayscount;

function handleBook(e){
  e.preventDefault();

  if(!pickup||!returnDate){
    alert("Please Enter the field");
    return;
  }
  alert("Booking Confirmed")
  e.target.reset();
  setPickup("")
  setReturnDate("")
  setPrice(1800)
  setChildSeat(false)
  setGPS(false)
  setDriver(false)
};
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

      <section className='parted'>

        <form className='partable' onSubmit={handleBook}>
   <label htmlFor="">Car:{car?.name||"Mauthi Swift"}</label><br></br>

   <select value={price} onChange={(e)=>setPrice(Number(e.target.value))}>

  <option value="1800">Maruthi Swift - Rs. 1,800/day</option>
   <option value="2000">Hyundai i20 - Rs. 2,000/day</option>
   <option value="2800">Honda City- Rs. 2,800/day</option>
 <option value="3200">SKoda-Slavia - Rs. 3200/day</option>
                                                        <option value="3800">Hyundai Creta - Rs. 3,800/day</option>
 <option value="4500">Mahindra Thar - Rs. 4,500/day</option>
                                                         <option value="4200">Toyato Innova - Rs. 4,200/day</option>
 <option value="3600">Kia Carens - Rs. 3,600/day</option>
     <br></br>
     </select>
<label htmlFor="">Pickup date</label>
         <input type="date" onChange={(e)=>setPickup(e.target.value)}/>
          <label htmlFor="">Return date</label>
          <input type="date" onChange={(e)=>setReturnDate(e.target.value)}/><br></br>
          <label htmlFor="">Full name</label>
          <input type="text" />
          <label htmlFor="">Phone</label>
          <input type="tel" /><br></br>
        <label htmlFor="">Add-ons</label><br></br>

        <div className="addons">
          <label htmlFor="">
          <input type="checkbox" 
           onChange={(e)=>setChildSeat(e.target.checked)}/>Child seat(Rs.300.day)<br></br>
</label>
<label>
        <input type="checkbox" onChange={(e)=>setGPS(e.target.checked)} />GPS navigator(Rs.500.day)<br></br>
</label>
<label>
        <input type="checkbox" onChange={(e)=>setDriver(e.target.checked)}/>Extra driver(Rs.700.day)<br></br>
   </label>
        <button type="submit">Confirm Booking</button>
        </div>
        </form>

        <div className='summary'>
<h2>Booking Summary</h2>
<p>Daily rate: Rs.{price}</p>
<p>Days: {dayscount}</p>
<p>Add-ons: Rs.{add * dayscount}</p>
<h3>Total : Rs. {total}</h3>
    
        </div>
      </section>
      <footer>
        <p>@ 2026 Drivo Car Renrtal. All rights reserved.</p>
      </footer>
      </>
  )
}

export default Book

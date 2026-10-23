import './main.css';
import { NavLink } from "react-router";
function Contact() {

  function data(e){
    e.preventDefault();
    const nameInput=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    if(nameInput===""||email===""||message===""){
      alert("Please Enter the field");
      return;
    }
    alert("Thank you for Submitting your form")
    e.target.reset();
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

      <section className="least">
        <div className="paint">
        <h4>Reach us</h4>
        <div>
          <h5>Phone</h5>
          <p>+91 8754639410</p>
          <h5>Email</h5>
          <p>Krrbalaji2004@gmail.com</p>
          <h5>Hours</h5>
          <p>Every day 7am to 10pm</p>
        </div>
</div>
<div className="form">
  <form onSubmit={data}>
    <label htmlFor="">Name</label><br></br>
    <input type="text" id="name"/><br></br>
    <label htmlFor="">Email</label><br></br>
    <input type="email" id="email"/><br></br>
    <label htmlFor="">Message</label><br></br>
    <textarea rows="5" id="message"></textarea><br></br>
    <button type="submit">Send Message</button>
  </form>
</div>
      </section>
      <footer className="data">
        <p>@ 2026 Drivo Car Renrtal. All rights reserved.</p>
      </footer>
      </>
  )
}

export default Contact

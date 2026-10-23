import { Link } from "react-router";
import './main.css';
import { NavLink } from "react-router";
function About() {
    const data=[
        {
        worked:"1.Choose",
        workpara:"Pick a cae and your dates."
    },
    {
              worked:"2.Confirm",
        workpara:"Share your name and phone. pay at pickup"  
    },
        {
              worked:"3.Drive",
        workpara:"Share your licence, collect the keys,go"  
    }
    ]


const mart=[{num:"120+",pain:"cars in the fleet"},
    {num:"4",pain:"cities"},
    {num:"25K",pain:"trips completed"},
    {num:"4.8",pain:"Average Rating"}
]
return(
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
      <section className="user">
        <h3>How it works</h3>
        <p>Renting should take less time than choosing a movie</p>
      </section>
      <section >
<div id="marked">
  {data.map((item) => (
    <div key={item.worked}>
      <h4>{item.worked}</h4>
      <p>{item.workpara}</p>
    </div>
  ))}
</div>
      </section>

      <section className="user">
        <div id="lap">
          {mart.map((link)=>(
            <div key={link.num}>
            <h4>{link.num}</h4>
            <p>{link.pain}</p>
        </div>
        ))}
        </div>
  
      </section>
      <footer className="pain">
        <p>@ 2026 Drivo Car Renrtal. All rights reserved.</p>
      </footer>
      </>
)
}

export default About;
import './Section1.css'
import phone from '../assets/phone.png'
const Section1 = ()=>{
    return(
        <div className="section1">
        <div className="section1-child1">
          <h1>Your trading journey</h1>
          <h2>starts here</h2>
          <p>Trade coins. Make payments. What’s your money move?</p>
          <button>Get started</button>
        </div>
        <div className="section1-child2">
          <img
            src={phone} className='phone'
            width="500px"
            alt="phone"
          />
        </div>
      </div>
    )
}

export default Section1
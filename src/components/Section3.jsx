import './Section3.css'
import globe from '../assets/globe.png'

const Section3 = ()=>{
    return(
        <div class="section3">
        <div class="section3-child1">
          <h1>Send cash across</h1>
          <h2>Africa, for free!</h2>
          <p>
            Enjoy borderless payments with Yellow Pay. Make your money move with
            the power of Stablecoins.
          </p>
          <button>Get started with Yellow Pay</button>
        </div>
        <div class="section3-child2">
          <img
            src={globe} className='globe'
            width="450px"
            alt="globe"
          />
        </div>
      </div>
    )
}

export default Section3
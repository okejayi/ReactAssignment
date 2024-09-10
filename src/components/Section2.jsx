import './Section2.css'
import yellowSec2 from '../assets/yellocard sec2 image.png'
const Section2 =()=>{
    return(
        <div class="section2">
        <div class="section2-child1">
          <h1>Embed our Widget in</h1>
          <h2>your business app</h2>
          <p>
            Enable your customers to buy and sell Stablecoins (and other coins)
            in 20 African countries using local mobile money and bank transfers
            directly from your business platform.
          </p>
          <button>Get started</button>
        </div>
        <div class="section2-child2">
          <img
            src= {yellowSec2} className='yellowSec2'
            width="400px"
            alt="phone"
          />
        </div>
      </div>
    )
}

export default Section2
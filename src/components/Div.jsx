import './Div.css'
import yellowLogo from '../assets/Yellow Card Logo (4).svg'

const Div = ()=>{
    return (
        <div className="container1">
        <div>
          <img
           src={yellowLogo} className="yellowLogo" alt="Yellow card logo" 
            width="150px"
          />
        </div>

        <ul id="container1-child1">
          <a href=""><li>Company</li></a>
          <a href=""><li>Products</li></a>
          <a href=""><li>Services</li></a>
          <a href=""><li>Help Centre</li></a>
        </ul>

        <div id="container1-child2">
          <li>English</li>
          <li>Login</li>
          <button style={{backgroundColor:'black'}}>sign up</button>
        </div>
      </div>
    )
}

export default Div
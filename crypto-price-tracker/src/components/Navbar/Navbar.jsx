import React, {useContext} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext.jsx'

export const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)
  const currencyHandler = (event)=>{
    switch (event.target.value.toLowerCase()){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "gbp": {
        setCurrency({name: "gbp", symbol: "£"});
        break;
      }
      case "jpy": {
        setCurrency({name: "jpy", symbol: "¥"});
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }
  return (
    <div className='navbar'>
        <img src={logo} alt='Logo' className='logo' />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='GBP'>GBP</option>
                <option value='JPY'>JPY</option>
            </select>
            <button>Sign up <img src={arrow_icon} alt="Arrow Icon"/>
            </button>

        </div>
    </div>
  )
}

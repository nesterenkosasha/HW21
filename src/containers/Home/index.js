import React from "react"
import "./index.scss"
import { browserHistory } from "react-router"
import { Link } from "react-router"

const btns = [
    {
        btnText: "Log in",
        btnclassNames: ""
    },
    {
        btnText: "Sign up",
        btnclassNames: "is-info"
    },
]

export default class HomeContainer extends React.PureComponent{
    constructor(props) {
        super(props)
}
handlerClick = () => {
    event.preventDefault()
    browserHistory.push("/features")
}

render(){
    return (
        <div>
       
       <nav className="nav has-shadow" id="top">
    <div className="container">
      <div className="nav-left">
        <a className="nav-item" href="../index.html">
          <img src="../images/bulma.png" alt="Description" />
        </a>
      </div>
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className="nav-right nav-menu">
        <Link 
        className="nav-item is-tab is-active"
        >
          Home
        </Link>
        <Link         
        className="nav-item is-tab"
        to={"/features"}
        >
          Features
        </Link>
        <Link 
        className="nav-item is-tab" 
        to={"/team"} 
        >        
          Team
        </Link>
        <Link 
        className="nav-item is-tab" 
        to={"/help"} 
        >
        Help
        </Link>
        <span className="nav-item">
          <Link 
          className="button"
          to={"/login"}
          >
            Log in
          </Link>
          <Link 
          className="button is-info"
          to={"/signup"}
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  </nav>
<div className="home">
    </div>          
        </div>  
    )
}
}

    
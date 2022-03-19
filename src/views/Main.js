import React from 'react'
//Components Import 
import { Link } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
    <div>Main</div>
    <button href="/">
        <Link to="/" >Home </Link>
    </button>
    </React.Fragment>
  )
}

export default Main
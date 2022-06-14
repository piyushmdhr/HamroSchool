import React from 'react'
import ReactDOM from "react-dom"
import './index.css'
import Header from './Header'
import Body from './Body'


function Landing(){
  return(
    <div>
      
      <Header />
      <Body />
    </div>
    )
  }

ReactDOM.render("Hello", document.getElementById("root"))
ReactDOM.render(<Landing /> , document.getElementById('root'))
import { Component } from "react";
import avocado from "./images/avocado.png"
import { Time } from "./Time"
import check from "./images/check.png"


export class ToDoList extends Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return(
      <div className="container">
        <img src={avocado} alt="TODO List" width="100px" className="avo"/>
        <div className="header">
        <h2>avoca<span className="doSpan">DO</span></h2>
        <img src={check} width="50px" alt="check"/>
        </div>
        <Time />
      </div>
    )
  }
}
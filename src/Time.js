import { Component } from "react";

export class Time extends Component{
  constructor(){
    super();

    this.state = {
      weekday:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      time: new Date().toLocaleTimeString(),
      date: new Date().getDay()
    }
  }

  componentDidMount(){
    this.timerId  = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }


  tick(){
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }


  render(){
    return(
      <div className="time-weekday">
        <p className="time">{this.state.time}</p>
        <p className="weekday">{this.state.weekday[this.state.date]}</p>
      </div>
    )
  }
}
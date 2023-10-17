import { Component } from "react";
import add from "./images/plus.png";
import remove from "./images/remove.png"
import check from "./images/check.png"

export class List extends Component{
  constructor(){
    super();

    this.state = {
      userInput: '',
      groceryList: []
    }
  }

  onChangeEvent(e){
    this.setState({
      userInput: e
    })
  }

  addItem(input){
    if(input === ""){
      alert('Add your list!')
    }else{
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''})
    }
  }

  enterBtn(e){
    this.setState({userInput: e});
  }

  crossBtn(e){
    const li = e.target;
    li.classList.toggle("cross")
  }

  removeBtn(){
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})

  }




  render(){
    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        this.addItem(this.state.userInput);
      }}>
      <div className="list">
        <h1>TODO List</h1>
        <input type="text" 
        placeholder="Type your list here"
        onChange={(e) => {this.onChangeEvent(e.target.value)}}
        value={this.state.userInput}
        />
        <ul>
          {this.state.groceryList.map((item, index) => (
            <li onClick={this.crossBtn} key={index}> <img src={check} width="20px"/> {item}</li>
          ))}
        </ul>
        <div className="buttons">
          <img onClick={() => this.addItem(this.state.userInput)} src={add} width="50px" alt="add sign"/>
          <img onClick={(e) => this.removeBtn()} src={remove} width="50px" alt="remove sign"/>
        </div>
      </div>
      </form>
    )
  }
}
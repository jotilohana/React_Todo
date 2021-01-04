import React from 'react';
import firebase from "./config/firebase "
import './App.css';


class App extends React.Component{

  constructor(){
    super()
    this.state={
      todos: [{title:"jk" , edit:false},{title:"Ak" , edit:false}],
      value:""
    }
  }
  set_input=()=>{
    var obj={title:this.state.value};
    firebase.database().ref('/').child("todos")
    .push(obj)
    this.setState({
      todos:[...this.state.todos,obj],
      value:''
    })
  }
  update_todo=(e,index)=>{
    this.state.todos[index].title= e.target.value;
    this.setState({
      todos:this.state.todos      
    })
  }
  final_update=(index)=>{
    this.state.todos[index].edit=false;
    this.setState({
      todos:this.state.todos      
    })
  }
  edit_todo=(index,v)=>{
    this.state.todos[index].edit=true;
    this.setState({
      todos:this.state.todos
    })      
  }
  delete_todo=(index)=>{
    this.state.todos.splice(index,1)
    this.setState({
        todos:this.state.todos
      })
  }
  render(){
    let {todos,value}=this.state;
    return(
      <div>
        <input value={value} onChange={(e)=>this.setState({value:e.target.value})}name="input"placeholder="Enter Task"/>
        <button onClick={this.set_input}>Add</button>
        <ul>
          {todos.map((v,i)=>{
           return <li key={i}>
             {v.edit?<input onChange={(e)=>this.update_todo(e,i)} value={v.title} type="text" />:v.title}
             {v.edit?
           <button onClick={(e)=>this.final_update(i)}>Update</button>:
           <button onClick={()=>this.edit_todo(i,v.title)}>Edit</button>}
           <button onClick={()=>this.delete_todo(i)}>Delete</button>
           </li>;
          })}
        </ul>
      </div>
    )
  }
}
export default App;
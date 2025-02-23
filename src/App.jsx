import { useState } from "react";
import Input from "./components/input"
import Tasks from "./components/tasks"
import Welcome from "./components/welcomemessage";
import { Todoitems } from "./store/Todoitems";

function App(){
  const[calval,setval]=useState([])
  function click(nmae,date){
    console.log(nmae);   
    console.log(date);
    setval([...calval,{
      "name":nmae,
      "date":date
    }])
  }
  function deletetask(deleted){
    console.log(deleted.name)
    setval(calval.filter(task=>!(task.name===deleted.name && task.date===deleted.date)))
  }
  return (
    <Todoitems.Provider value={calval}>
    <center><h1>Todo List</h1></center>
    <Input event={click}/>
    <Welcome></Welcome>
    <Tasks deletetask={deletetask}></Tasks>
  </Todoitems.Provider>)
}
export default App
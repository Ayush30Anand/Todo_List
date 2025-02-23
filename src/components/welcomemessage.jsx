import { useContext } from "react"
import { Todoitems } from "../store/Todoitems"

function Welcome(){
    const tasks=useContext(Todoitems)
    return(
        (tasks.length===0)  &&
        <center><h1>Enjoy your day</h1></center>)
}
export default Welcome
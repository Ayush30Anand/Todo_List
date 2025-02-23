import { useContext } from 'react';
import { Todoitems } from '../store/Todoitems';
import styles from './tasks.module.css'
import { RiDeleteBin6Line } from "react-icons/ri";

function Tasks({deletetask}){
    const task=useContext(Todoitems);
    return(
        <div class={`container text-center`}>
            {task.map(item=>(
  <div class={`row align-items-start ${styles.divs}`}>
    <div class="col">
      {item.name}
    </div>
    <div class="col">
      {item.date}
    </div>
    <div class="col">
<button onClick={()=>deletetask(item)} type="button" class={`btn btn-danger ${styles.butt}`}><RiDeleteBin6Line /></button>
    </div>
  </div>))}
</div>
    )
}
export default Tasks
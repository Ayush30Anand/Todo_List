import { useState } from "react";
import styles from './input.module.css'
import { IoMdAdd } from "react-icons/io";
function Input({event}){
    const [calval1,setval1]=useState("")
    const [calval2,setval2]=useState("")
    function taskval(event){
        setval1(event.target.value);
    }
    function dateval(event){
        setval2(event.target.value);
    }
    function handleclick(){
        event(calval1,calval2)
        setval1("")
        setval2("")
    }
    return(
        <div class={`container text-center ${styles.common}`}>
    <div class="row align-items-start">
    <div class={`col `}>
      <input class={styles.inputs} placeholder="Enter Tasks to be comppleted" value={calval1} onChange={taskval}></input>
    </div>
    <div class={`col`}>
    <input class={styles.inputs} type="date" value={calval2} onChange={dateval}></input>
    </div>
    <div class={`col ${styles.butt}`}>
        <button type="button" class={`btn btn-success ${styles.butsize}`} onClick={handleclick}><IoMdAdd/></button>
    </div>
  </div>
</div>
    )
}
export default Input
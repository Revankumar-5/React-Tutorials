import useToggle from "./useToggle"
import {useEffect, useState} from "react"


export default function ToggleExample(){
  const [count, setCount]=useState(0)
    const[value,toggleValue,countValue]=useToggle(false,count)

    // useEffect(()=>
    // {
    // setCount(countValue)
    // },[])
    return(
        <>

        
      <h1>Boolean :-{value.toString()}</h1>
      {/* <h1>Boolean :-{countValue}</h1> */}

        <button onClick={toggleValue}>Toggle</button>
        <button onClick={()=>toggleValue(true)} >Make True </button>
        <button onClick={()=>toggleValue(false)} >MAke False</button>

        </>)
}
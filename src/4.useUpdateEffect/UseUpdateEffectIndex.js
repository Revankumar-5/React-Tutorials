import {useState} from "react"
import UseUpdateEffect from "./UseUpdateEffect"

export default function UseUpdateEffectIndex(){

 const[count,setCount]=useState(10) ;
 UseUpdateEffect(() => alert("RENDERED"), [count])
 
return(
<div>
    {count}
    <br></br>
    <button onClick={()=>setCount(c=>c+1)}>CLICK</button>
</div>
) 
}
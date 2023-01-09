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

// import { useState } from "react"
// import useUpdateEffect from "./UseUpdateEffect"
// export default function UpdateEffectComponent() {
// const [count, setCount] = useState(10)

// useUpdateEffect (() => alert(count), [count])
// return (
// <div>
// <div> {count}</div>
// <button onClick={() => setCount(c => c + 1)}>Increment</button>
// </div>)}
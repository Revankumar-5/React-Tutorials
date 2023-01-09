import {useEffect, useState,useRef} from "react"

export default function useToggle(defaultValue,count){
    const[value,setValue]=useState(defaultValue)

    // const counts=useRef(0);
    // useEffect(()=>
    // {
    //     console.log("hii");
    //     counts.current=counts.current+1
    //     console.log(counts.current);
    // },[value])


    function toggleValue(value)    {
        
        setValue(currentValue  => typeof value ==="boolean" ? value : !currentValue)
    }

    return[value,toggleValue,
        // counts.current
    ]
  

}
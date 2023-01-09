import React,{useState} from "react"
import useLocalStorage from "./useLocalStorage"

export default function Index(){

  const setNames=()=>
  {
    return "Hiii"
  }

  const[name,setName]=useLocalStorage("name", setNames)
  return(
   <> <h1>{name}</h1>
    <input  
    type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    </>
  )
}


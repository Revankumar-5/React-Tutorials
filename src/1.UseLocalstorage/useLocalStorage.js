import {useEffect, useState }from "react"
function getSaveValue(key,initialValue){

 const savedValue = JSON.parse(localStorage.getItem(key));

 if(savedValue) return savedValue;

 if(initialValue instanceof Function) return initialValue(); // if initial value was a function

return initialValue;

}

export default function useLocalStorage(key,initialValue) {

const[value,setValue]=useState(getSaveValue(key,initialValue));

useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
},[value])

return[value,setValue]
}
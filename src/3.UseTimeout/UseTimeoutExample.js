import {useCallback,useEffect,useRef} from 'react'
export default function UseTimeoutExample(callback, delay) {
  const callbackRef = useRef(callback); //  ()=>setCount(0)
  const timeoutRef = useRef();
  console.log(delay);
  console.log(timeoutRef);


  useEffect(() => {
    console.log("useEffect1");
    callbackRef.current = callback;
  }, [callback]);

    const set = useCallback(() => {
    console.log("set");
console.log(callbackRef.current);
      timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    

    }, [delay]);

  const   clear = useCallback(() => {
    console.log("clear");
  console.log(timeoutRef);

     timeoutRef.current && clearTimeout(timeoutRef.current);
     console.log(timeoutRef);
   }, [])


  useEffect(() => {
    console.log("useEffect2");

    set();
    return clear;
  }, [delay, set, clear]);


  const   reset = useCallback(() => {
    console.log("reset");

    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

import { useState, useTransition } from "react";

function UseTransitionExample() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
 
  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      console.log("transition");
      const a = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        a.push(e.target.value);
      }
      setList(a);
    });
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending? <div>LOADING.....</div>:list.map((item, index) => {
        return <div key={index}>{item} </div>;
      })}
    </>
  );
}
export default UseTransitionExample;

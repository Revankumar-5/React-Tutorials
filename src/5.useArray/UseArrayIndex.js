import useArray from "./UseArray";
export default function ArrayComponent() {
  
    const { array,set, push, remove, filter, update, clear,setToNormalValue } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);



  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(array.length+1)}>Add Next Number</button>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 4)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
      <button onClick={setToNormalValue}>setDefaultValue</button>
    </div>
  )
}

import { useMemo, useState } from "react"
import UseTimeoutExample from "./UseTimeoutExample"
export default function useTimeIndex() {
const [count, setCount] = useState (10)
const { clear, reset} = UseTimeoutExample(() => setCount(0), 1000)


return (<>

<div> {count}</div>
<button onClick={() => setCount(c => c + 1)}>Increment</button>
<button onClick={clear}>Clear Timeout</button>
<button onClick={reset}>Reset Timeout</button>
</>)
}
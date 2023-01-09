import { useEffect, useRef } from "react";

export default function UseUpdateEffect(callback, dependencies) {

 const firstRendered=useRef(0)

  useEffect(() => {
    if (firstRendered.current <2) {
        firstRendered.current=firstRendered.current=firstRendered.current+1;
      return
    }

        return callback();
  }, dependencies);
}

// import { useEffect, useRef} from "react"
// export default function useUpdateEffect (callback, dependencies) {
// const firstRenderRef = useRef(true)

// useEffect (() => {
// if (firstRenderRef.current) {
// firstRenderRef.current = false
// return
// }
// return callback()
// }, dependencies)
// }
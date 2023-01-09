import { useEffect, useRef } from "react";

export default function UseUpdateEffect(callback, dependencies) {

 const firstRendered=useRef(true)
 console.log(firstRendered.current);
 console.log(dependencies);

  useEffect(() => {
    if (firstRendered.current) {
        firstRendered.current=false
      return
    }

        return callback();
  }, dependencies);
}

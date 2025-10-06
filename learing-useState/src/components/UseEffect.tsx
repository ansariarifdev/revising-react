import { useState, useEffect } from "react";    

export default function UseEffectComponent() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount((count) => count + 1);
    }

    function decrementCount() {
        setCount((count) => count - 1);
    }
    
    useEffect(() => {
        console.log('count changed', count);

        return () => {
            console.log('Cleanup is executed for the count', count);
        }
    }, [count])

    return (
      <div>
        {count}
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    );
}

import { useState } from 'react'

export default function UseStateComponent() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount((count) => count + 1);
    }

    function decrementCount() {
      setCount((count) => count - 1);
    }

    return (
        <div>
            {count}
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    )
}
import { useReducer } from "react";

interface State {
    count: number;
    error: string | null;
}

interface Actions {
    type: "increment" | "decrement";
}

function counterReducer(state: State, action: Actions): State {
    const { type } = action;

    switch(type) {
        case "increment": {
            
            const count = state.count + 1;
            const hasError: boolean = count > 5;
            
            return {
                ...state,
                count: (hasError) ? state.count : count,
                error: (hasError) ? "max limit is 5": null
            }
        }
        case "decrement": {

            const count = state.count - 1;
            const hasError: boolean = count < 0;
            
            return {
                ...state,
                count: (hasError) ? state.count : count,
                error: (hasError) ? "min limit is 0": null
            }
        }
    }
}
export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
        error: null
    })

    return (
      <div>
        Current count is : {state.count}
        {state.error && <div>{state.error}</div>}
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    );
}
import { useState } from "react";
import { ExpensiveComponent } from "./ExpensiveComponent";

function UnoptimizedApp() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div className="app">
            <h1>Counter value : {counter}</h1>
            <div className="btnContainer">
                <button onClick={() => setCounter((prev) => prev + 1)}>
                    Increase
                </button>
                <button onClick={() => setCounter((prev) => prev - 1)}>
                    Decrease
                </button>
            </div>
            <ExpensiveComponent />
        </div>
    );
}

export default UnoptimizedApp;

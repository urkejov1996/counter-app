import { useState } from 'react'
import './Counter.css'

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }
    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>
        </>
    )
}

function CounterButton({ by, incrementMethod, decrementMethod }) {


    const [count, setCount] = useState(0);

    console.log(by)

    function incrementCounterFunction() {
        setCount(count + by)
        incrementMethod(by)
    }

    function decrementCounterFunction() {
        setCount(count - by)
        decrementMethod(by)
    }


    return (
        <div className="Counter">
            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}
                >+{by}</button>
                <button className="counterButton"
                    onClick={decrementCounterFunction}
                >-{by}</button>
            </div>
        </div>

    )
}


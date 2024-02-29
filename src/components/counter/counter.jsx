import { useState } from 'react'
import './Counter.css'


export default function Counter({ by }) {


    const [count, setCount] = useState(0);

    console.log(by)

    function incrementCounterFunction() {
        setCount(count + by)
        console.log(count)
    }

    function decrementCounterFunction() {
        setCount(count - by)
        console.log(count)
        console.log(count)
    }


    return (
        <div className="Counter">
            <span className="count">{count}</span>
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


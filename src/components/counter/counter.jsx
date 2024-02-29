import { useState } from 'react'
import './Counter.css'
import CounterButton from './counterButton'
import ResetButton from './ResetButton';

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }
    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }
    function resetButtonFucniton(){
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}></CounterButton>
            <ResetButton resetMethod={resetButtonFucniton}></ResetButton>
        </>
    )
}

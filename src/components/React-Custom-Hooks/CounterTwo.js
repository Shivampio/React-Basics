import React, { useState } from 'react'
import useCounter from './Hooks/useCounter'

export default function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(10)
    
    return (
        <div>
            Count = {count}
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
            <button onClick={()=>reset()}>Reset</button>
        </div>
    )
}

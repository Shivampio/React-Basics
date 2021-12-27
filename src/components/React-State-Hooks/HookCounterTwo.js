import React, { useState } from 'react'

export default function HookCounterTwo() {
    const intialCount = 0

    const [count, setcount] = useState(intialCount)

    const incrementFive = ()=>{
        for(let i=0; i<5; i++){
            setcount(prevCount=> prevCount+1)
        }
    }
    return (
        <div>
            Count:{count}
            <button onClick={()=>setcount(intialCount)}>Reset</button>
            <button onClick={()=>setcount(prevCount=> prevCount+1)}>Increment</button>
            <button onClick={()=>setcount(prevCount=> prevCount-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}

import React, { useState } from 'react'
import useDocumentTitle from './Hooks/useDocumentTitle'

export default function DocCounterOne() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click {count}</button>
        </div>
    )
}

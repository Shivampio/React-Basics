import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setcount] = useState(0)
    const [name, setname] = useState('')

    useEffect(() => {
        console.log('use Effect Updated');
        document.title = `You clicked ${count} times`
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={e=>setname(e.target.value)}/>
            <button onClick={()=>setcount(count +1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne

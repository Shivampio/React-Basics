import React, {useState} from 'react'

export default function HookCounter() {

   const [count, setcount] = useState(0);
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>Clicked {count}</button>
        </div>
    )
}

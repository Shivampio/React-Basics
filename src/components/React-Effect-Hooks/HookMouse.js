import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const logMousePosition= e =>{
        console.log('mouse event')
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
       console.log('Use Effect called')
       window.addEventListener('mousemove', logMousePosition)

       return()=>{
           console.log('Component Unmount')
           window.removeEventListener('mousemove', logMousePosition)
       }
    },[])

    return (
        <div>
            Hooks X -{x} Y-{y}
        </div>
    )
}

export default HookMouse

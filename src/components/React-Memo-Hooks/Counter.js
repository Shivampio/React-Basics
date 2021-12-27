import React, { useMemo, useState } from 'react'

export default function Counter() {
    const [countOne, setcountOne] = useState(0)
    const [countTwo, setcountTwo] = useState(0)

    const incrementOne=()=>{
        setcountOne(countOne + 1)
    }

    const incrementTwo=()=>{
        setcountTwo(countTwo +1)
    }

    const isEven = useMemo(() =>{
        let i=0
        while(i<2000000000) i++
        return countOne % 2 ===0
    }, [countOne]) 
    

    return (
        <div>
            <button onClick={()=>incrementOne()}>Click1 {countOne}</button>
            <span>{isEven?'Even':'Odd'}</span>
            <button onClick={()=>incrementTwo()}>Click2 {countTwo}</button>
        </div>
    )
}

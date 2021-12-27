import React, {useState} from 'react'

export default function HookCounterThree() {

    const [name, setname] = useState({firstName:'', lastName:''})
    return (
        <div>
            <input type='text' value={name.firstName} onChange={e=>setname({...name, firstName:e.target.value})}/>
            <input type='text' value={name.lastName} onChange={e=>setname({...name, lastName:e.target.value})}/>

            <h2>Your First Name - {name.firstName}</h2>
            <h2>Your Last Name - {name.lastName}</h2>
        </div>
    )
}

import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setloading] = useState(true)
    const [post, setpost] = useState({})
    const [error, seterror] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`).
        then(res=>{
            console.log(res)
            setloading(false)
            setpost(res.data)
        })
        .catch(err=>{
            setloading(false)
            setpost({})
            seterror('Something went wrong')
            console.log(err)
        })
     }, [])
    return (
        <div>
            {loading? 'Loading' : post.title}
            {error? error : null}
        </div>
    )
}

export default DataFetchingOne

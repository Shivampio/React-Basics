import React from 'react'
import './myStyle.css'

export default function StylesSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <div className={`${className} font-xl `}>StylesSheet</div>
        </div>
    )
}

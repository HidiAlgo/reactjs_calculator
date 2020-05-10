import React from 'react'
import './Operations.css'

function Operations() {
    return (
        <>
            <tr>
                <td><button className="align btn-style opera-bg">+</button></td>
            </tr>
            <tr>
                <td><button className="align btn-style opera-bg" >-</button></td>
            </tr>
            <tr>
                <td><button className="align btn-style opera-bg">/</button></td>
            </tr>
            <tr>
                <td><button className="align btn-style opera-bg">*</button></td>
            </tr>
            <tr>
                <td><button className="align eqn" id="eqn-bg">=</button></td>
            </tr>
        </>
    )
}

export default Operations

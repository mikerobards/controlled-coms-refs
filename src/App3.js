import React, { useState, useRef, useEffect } from 'react';

// let z = 10
// const add = (x, y) => {
//     z += x // this is a side effect 
//     return x = y
// }

const App = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    let initialFocusRef = useRef(null)
    let focusRef = useRef(null)

    useEffect(() => {
        initialFocusRef.current.focus()
    }, []) // dependency array

    // [] => only called on initial render
    // no array => called on initial render and every state change
    // [variable] => called on initial render, and whenever variable changes

    return (
        <section>
            <h2>Email Signup</h2>
            <input type="text" value={name} placeholder="Name" ref={initialFocusRef} onChange={(e) => {
                setName(e.target.value)
                if (name.length >= 10) {
                    focusRef.current.focus()
                }
            }} />
            <input type="text" value={email} ref={focusRef} placeholder="Email" onChange={(e) => {
                setEmail(e.target.value)
            }} />
        </section>
    )
}

export default App
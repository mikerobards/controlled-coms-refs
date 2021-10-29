import React, { useState } from 'react'

const CharacterCounterInput = ({ text, defaults }) => {
    const maxLength = 280
    const [message, setmessage] = useState('')

    return <div className={`counterInput ${message.length > maxLength ? "tooLong" : ""}`}>
        <div>
            {defaults.map((b) => {
                return <button key={b} onClick={() => {
                    setmessage(b)
                }}>{b}</button>
            })}
        </div>
        <textarea
            placeholder={text}
            value={message}
            onChange={(e) => {
                setmessage(e.target.value)
            }}
        />
        <div>{message.length}/{maxLength}</div>
    </div>
}

function App2() {
    let defaultMoods = ["Great", "Okay", "Bad"]

    return (
        <section>
            <h2>Mood Tracker</h2>
            <CharacterCounterInput text={"How was your day?"} defaults={defaultMoods} />
        </section>
    )
}

export default App2
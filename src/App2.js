import React from 'react'

let callCount = -1
let states = []

function useState(initValue) {
    const id = ++callCount

    const setValue = (newValue) => {
        states[id][0] = newValue
    }
    let tuple = [initValue, setValue]
    states.push(tuple)
    return tuple
}

const CharacterCounterInput = ({ text, defaults }) => {
    const maxLength = 280
    const [message, setmessage] = useState('')
    const [error, setError] = useState(false)

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
                if (message.length > maxLength) {
                    setError(true)
                } else {
                    setError(false)
                }
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
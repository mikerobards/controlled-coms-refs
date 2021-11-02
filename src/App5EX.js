import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react';
import ReactDOM from 'react-dom';

// Overall, you want to be able to switch between forms.
// 1) Turn the Login/Signup forms into controlled components
// 2) Make just one form show up at a time
// 3) Make the buttons toggle which component is rendered
// 4) Forward the ref from the ToggleableForm to the components
// 5) Make a form's first input focused when it is active using a side effect

const App = () => {
    let data = [
        { name: 'Log in, my friend', component: LoginForm },
        { name: 'Sign up', component: SignupForm }
    ]
    return (
        <section>
            <h2>Log in / Sign up</h2>
            <ToggleableForm options={data} />
        </section>
    )
}
const ToggleableForm = ({ options }) => {
    const [currentForm, setCurrentForm] = useState(0)
    let focusRef = useRef(null)

    return <>
        {options.map((el, index) => {
            return <ButtonToggle key={`button${index}`} toggleForm={() => {
                setCurrentForm(index)
            }}>{el.name}</ButtonToggle>
        })}
        <FormToggle currentIndex={currentForm}>
            {options.map((el, index) => {
                return <div key={`form${index}`}>
                    {createElement(el.component, { ref: focusRef })}
                </div>
            })}
        </FormToggle>
    </>
}

const ButtonToggle = ({ children, toggleRef, toggleForm }) => {
    return <button onClick={() => {
        toggleForm()
    }}>{children}</button>
}

const FormToggle = ({ children, currentIndex }) => {
    if (Array.isArray(children)) {
        return <div>{children[currentIndex]}</div>
    }
    return null
}

const LoginForm = forwardRef((props, ref) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        ref.current.focus()
    }, [])

    return <>
        <input type="text" value={username} ref={ref} placeholder="Username" onChange={(e) => {
            setUsername(e.target.value)
        }} />
        <input type="password" value={password} placeholder="Password" onChange={(e) => {
            setPassword(e.target.value)
        }} />
        <button>Submit</button>
    </>
})

const SignupForm = forwardRef((props, ref) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        ref.current.focus()
    }, [])

    return <>
        <input type="email" value={email} ref={ref} placeholder="Email" onChange={(e) => {
            setEmail(e.target.value)
        }} />
        <input type="text" value={username} placeholder="Username" onChange={(e) => {
            setUsername(e.target.value)
        }} />
        <input type="password" value={password} placeholder="Password" onChange={(e) => {
            setPassword(e.target.value)
        }} />
        <button>Submit</button>
    </>
})

ReactDOM.render(<App />, document.getElementById('root'));

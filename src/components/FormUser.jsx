import React, { useState } from 'react'
import Card from './UI/Card'

function FormUser(props) {
    const [enteredValue,setInteredValue] = useState("")
    const [age, setAge] = useState("")
    

    const inputChangeHandler = (event) => {
    setInteredValue(event.target.value)
    }
    const ageChangeHandler = (event) => {
    setAge(event.target.value)
    }

    const submitChangeHandler = (event) => {
    event.preventDefault()
    props.onAddUser(enteredValue, age)
    setAge("")
    setInteredValue('')
    }
  return (
    <Card>
        <form onSubmit={submitChangeHandler}>
        <input placeholder='Enter your name...' value={enteredValue} onChange={inputChangeHandler} type="text" />
        <input placeholder='Enter your age...' value={age} onChange={ageChangeHandler} type="number" />
        <button>Add user</button>

    </form>
    </Card>
    
  )
}

export default FormUser
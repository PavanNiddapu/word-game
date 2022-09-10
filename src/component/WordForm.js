import React from "react";
import { useState } from 'react';

const WordForm = (props) => {

    const [input, setInput] = useState(Array(props.word.length));

    const submitHandler = (event) => {
        event.preventDefault();
        alert(`On Sumbit ${input}`)
    }
    const letterChangeHandler = (event) => {
        const letter = event.target.value
        const index = event.target.getAttribute('data-key')
        event.preventDefault();
        setInput((array) => { array[index] = letter; return array })
    }

    return (<form className='conatiner' onSubmit={submitHandler}>
        {Array(props.word.length).fill(1).map((el, i) =>
            <input className='letter-input' key={i} data-key={i} maxLength="1" type="text" onChange={letterChangeHandler} />
        )}
        <input type="submit" value="Press enter to submit" />
    </form>)
}

export default WordForm
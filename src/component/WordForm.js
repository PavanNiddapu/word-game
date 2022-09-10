import React from "react";
import { useState } from 'react';

const WordForm = (props) => {

    const [input, setInput] = useState(Array(props.word.length));

    const submitHandler = (event) => {
        event.preventDefault();
        props.validate(input)
    }
    const letterChangeHandler = (event) => {
        const letter = event.target.value
        const index = event.target.getAttribute('data-key')
        event.preventDefault();
        setInput((array) => {
            array[index] = letter;
            return array;
        })
    }

    return (<form className='conatiner' id="form" onSubmit={submitHandler}>
        {Array(props.word.length).fill(1).map((el, i) =>
            <input className='letter-input' key={i} data-key={i} maxLength="1" type="text" onChange={letterChangeHandler} />
        )}
        <input type="submit" className="button" value="Press enter reverse word and press enter" />
    </form>)
}

export default WordForm
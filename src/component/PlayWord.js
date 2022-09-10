import React from "react";
import { useState } from 'react';
import WordForm from './WordForm';
import WrongWord from './WrongWord';


const PlayWord = (props) => {
    const [enteredWord, setEnteredWord] = useState()
    const [isWordValid, setIsWordValid] = useState()
    const validateOnSubmit = (letterArray) => {
        let enteredWord = letterArray.join("").toUpperCase()
        letterArray = [...letterArray].reverse()
        let actualWord = letterArray.join("").toUpperCase()
        setEnteredWord(enteredWord)
        if (actualWord === props.aWord.toUpperCase()) {
            setIsWordValid(true)
        } else {
            console.log(`Not valid as ${letterArray.join("").toUpperCase()}`)
            setIsWordValid(false)
        }
    }

    const playNextWord = () => {
        props.doNext()
    }

    return (
        <div className=''>
            <div className='flash'>{props.aWord} </div>

            {!enteredWord && <WordForm word={props.aWord} validate={validateOnSubmit} />}
            {isWordValid && <div>Correct<button onClick={playNextWord} >Next Word</button> </div>}
            {enteredWord && !isWordValid && <WrongWord enteredWord={enteredWord} aWord={props.aWord} />}
        </div>
    )
}

export default PlayWord;
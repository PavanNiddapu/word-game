import React from 'react';
import { useState } from 'react';

import Word from './component/Word';
import WordForm from './component/WordForm';
import WrongWord from './component/WrongWord';

function App() {
  const [enteredWord, setEnteredWord] = useState()
  const [isWordValid, setIsWordValid] = useState()
  const validateOnSubmit = (letterArray) => {
    let enteredWord = letterArray.join("").toUpperCase()
    letterArray = [...letterArray].reverse()
    let actualWord = letterArray.join("").toUpperCase()
    setEnteredWord(enteredWord)
    if (actualWord === aWord.toUpperCase()) {
      setIsWordValid(true)
    } else {
      console.log(`Not valid as ${letterArray.join("").toUpperCase()}`)
      setIsWordValid(false)
    }
  }

  const aWord = "RAW";
  return (<div className=''>
    <div className='flash'>{aWord} </div>

    {!enteredWord && <WordForm word={aWord} validate={validateOnSubmit} />}
    {isWordValid && <div>Correct</div>}
    {enteredWord && !isWordValid && <WrongWord enteredWord={enteredWord} aWord={aWord} />}


  </div>);
}

export default App;
// Create a box and a letter in it with big font at the center of the page - Done
// Given N letter word, show each leter in N seperate boxes - Done
// Flash a word on top for 5 sec - Done 
// Type the word in the N box of the original word and click on submit - Done
// Validate the word with the flashed word - Done
// Take a word at random from an array of words and do the above process
// Have timer for the flash and display the numbers 3
// Have proper coloring

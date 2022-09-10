import React from 'react';
import { useState } from 'react';
import PlayWord from './component/PlayWord';


function App() {

  const aWord = "Cat";
  const getStorage = () => {
    return localStorage.getItem('words')
  }
  const getStorageAsArray = () => {
    if (getStorage()) {
      return [...getStorage().split(",")]
    }
    return []
  }
  const [words, setWords] = useState(getStorageAsArray())
  const [csv, setCsv] = useState()

  const setStorage = (item) => {
    if (!getStorage()) {
      localStorage.setItem('words', item)
    } else {
      localStorage.setItem('words', `${getStorage()},${item}`)
    }
  }

  const initStorage = (item) => {
    localStorage.setItem('words', item)
  }

  const popLastStorageItem = () => {
    if (getStorage()) {
      let storageArray = getStorage().split(",")
      storageArray.pop()
      initStorage(storageArray.join(","))
    }
  }


  const setCSVInput = () => {
    if (csv) {
      setStorage(csv)
      setWords(getStorage().split(","))
    }
  }

  const onNextHandler = () => {
    popLastStorageItem()
    window.location.reload(false)
  }

  const onChangeCsvHandler = (event) => {
    const csvInput = event.target.value.trim()
    if (csvInput && csvInput.length > 0) {
      setCsv(csvInput)
    }
  }

  return (<div className=''>
    <form id="form1" onSubmit={setCSVInput}>
      <label>Use comma seperated words as input. Eg: Apple,Ball </label>
      <input type="text" id="csvInput" onChange={onChangeCsvHandler} />
      <input type='submit' className='button' value="Submit" />
    </form>
    {words.length == 0 && <label>No words available...use above box to fill words</label>}
    {words.length > 0 && <PlayWord aWord={words.pop()} doNext={onNextHandler} />}
  </div>);
}

export default App;
// Create a box and a letter in it with big font at the center of the page - Done
// Given N letter word, show each leter in N seperate boxes - Done
// Flash a word on top for 5 sec - Done 
// Type the word in the N box of the original word and click on submit - Done
// Validate the word with the flashed word - Done
// Take a word at random from an array of words and do the above process
  // - Form to take csv of words - Done
  // - On Submit of form set the csv to local storage - Done
  // - display PlayWord if there is min a word in local storage - Done
  // - Pop the word from local storage and display - Done
  // - Only set storage if the csv lenght is greater than 0 - Done
// In case of wrong answer show a retry button - Done
// Also show expected reverse word in case of wrong answer - Done
// Have label, timer for the flash and display the numbers 3
// Make the Csv input wider - Done
// Have proper coloring,margin of buttons and lables - Done

import React from 'react';
import { useState } from 'react';
import PlayWord from './component/PlayWord';


function App() {

  const aWord = "Cat";
  return (<div className=''>
    <PlayWord aWord={aWord} />
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

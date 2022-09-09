import React from 'react';

import Word from './component/Word';

function App() {
  const aWord = "Hello";
  return (<div className=''>
    <div className='flash'>{aWord} </div>
    <Word word={aWord} />
  </div>);
}

export default App;
// Create a box and a letter in it with big font at the center of the page - Done
// Given N letter word, show each leter in N seperate boxes - Done
// Flash a word on top for 5 sec - Done 
// Type the word in the N box of the original word and click on submit
// Validate the word with the flashed word
// Take a word at random from an array of words and do the above process
// have proper coloring

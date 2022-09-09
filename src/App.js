import React from 'react';
import Letter from './component/Letter';

function App() {
  const value = 'World';
  const aWord = "Hello";
  return (<div>
    {aWord.split("").map(letter => <Letter letter={letter} />)}
  </div>);
}

export default App;
// Create a box and a letter in it with big font at the center of the page -Done
// Given N letter word, show each leter in N seperate boxes
// Flash a word on top for 5 sec 
// Type the word in the box and click on submit
// Validate the word with the flashed word
// Take a word at random from an array of words and do the above process
// have proper coloring

import React from "react";
import Word from "./Word";


const WrongWord = (props) => {

    const reverseString = (word) => {
        let wordArray = word.split("")
        let reverseWordArray = wordArray.reverse()
        let reverseWord = reverseWordArray.join("")
        return reverseWord
    }
    const retryHandler = () => {
        window.location.reload(false)
    }
    return (
        <div>
            <label id="wrongLabel">You have entered wrong word</label>
            <div>
                <label>Entered Word..</label>
                <Word word={props.enteredWord} />
            </div>
            <div>
                <label>Expected Reverse Word..</label>
                <Word word={reverseString(props.aWord)} />
            </div>
            <div>
                <label>Actual Word..</label>
                <Word word={props.aWord} />
            </div>
            <button id="retry" onClick={retryHandler}>Retry</button>
        </div >
    )
}

export default WrongWord;
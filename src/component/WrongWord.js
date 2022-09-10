import React from "react";
import Letter from './Letter';
import Word from "./Word";


const WrongWord = (props) => {
    const retryHandler = () => {
        window.location.reload(false)
    }
    return (
        <div>
            <div>You have entered wrong word</div>
            <div>
                <label>Entered Word..</label>
                <Word word={props.enteredWord} />
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
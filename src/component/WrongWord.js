import React from "react";
import Letter from './Letter';
import Word from "./Word";


const WrongWord = (props) => {
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
            {/* <EnteredWord label="Entered Word.." word={props.enteredWord} />
            <EnteredWord label="Actual Word.." word={props.aWord} /> */}
        </div >
    )
}

export default WrongWord;
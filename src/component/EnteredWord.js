import React from "react";
import Letter from './Letter';
import Word from "./Word";


const EnteredWord = (props) => {
    return (
        <div>
            {<div>
                <label>{props.label}</label>
                <Word word={props.word} />
            </div>}
        </div >
    )
}

export default EnteredWord;
import React from "react";
import Letter from './Letter';

const Word = (props) => {
    return (
        <div className='conatiner'>
            {props.word.split("").map(letter => <Letter letter={letter} />)}
        </div>
    )
}

export default Word
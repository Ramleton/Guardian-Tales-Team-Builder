import React from 'react'

interface Props {
    handleClick: CallableFunction;
    text: string;
}

const Button: React.FC<Props> = ({ handleClick, text }) => {
    return (
        <div className="button" onClick={() => handleClick()}>
            {text}
        </div>
    );
}

export default Button;
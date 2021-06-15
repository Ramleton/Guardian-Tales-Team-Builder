import React from 'react'

interface Props {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
    return (
        <div>
            <button onClick={(e) => onClick(e)}>{text}</button>
        </div>
    );
}

export default Button
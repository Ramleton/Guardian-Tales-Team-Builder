interface Props {
    text: string;
}

const Header:React.FC<Props> = ({ text }) => {
    return (
        <header className="header">
            <h1>
                {text}
            </h1>
        </header>
    )
}

export default Header

function Button({text, color, fontSize, margin, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px',
        margin: margin + 'px'
    };

    

    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    );

}

Button.defaultProps = {
    text: "Clear",
    color: "green",
    fontSize: 12,
    margin: 10,

};

export default Button;
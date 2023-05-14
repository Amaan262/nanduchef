import styled from 'styled-components'

const Buttons = styled.button`

background-color: ${props => props.btnColor ? props.btnColor : 'black'};
color: white;
outline: none;
border: none;
padding: 10px 20px;
border-radius: 5px;
font-weight: bold;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
    opacity: 0.8;
}

`

const Button = (props) => {
    return (
        <Buttons btnColor={props.btnColor}>
            {props.children}
        </Buttons>
    )
}

export default Button
import React from 'react'
import '../styles/Button.css'

function Button(props){

    const isOperator = valor =>{
        return isNaN(valor) && (valor != '.') && (valor != '=')
    };

    return(
        <div
            className={`button-container ${isOperator(props.children)? 'operator' : ''}`.trim()}
            onClick={ () => props.functionClick(props.children)}>
            { props.children }
        </div>
    )
}

export default Button
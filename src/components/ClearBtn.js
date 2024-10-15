import React from "react";
import '../styles/ClearBtn.css';

const ClearBtn = (props)=>(
    <div className='clear-btn' onClick={ props.functionClick }>
        { props.children }
    </div>
);

export default ClearBtn
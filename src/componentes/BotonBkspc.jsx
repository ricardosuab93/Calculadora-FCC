import React from 'react';
import '../styles/BotonBkspc.css'

const BotonBkspc = (props) => (
    <div className='boton-bkspc' onClick={props.manejarClick}>
        {props.children}
    </div>
);

export default BotonBkspc;
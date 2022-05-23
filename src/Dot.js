import React from 'react';
import './css/main.css';

const Dot = ({ onClick, status, id }) => {

    const bulletId = id;
    
    return (
        <div className="c-dot" style={{backgroundColor: status ? 'red' : ''}} onClick={onClick}>
          { status ? bulletId + 1 : "" }
        </div>
    );
};

export default Dot;

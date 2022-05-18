import React from 'react';
import {useState} from 'react';
import './css/main.css';

const Dot = (id) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(current => !current);
    };

    const bulletId = id.id;
    
    return (
        <div className="c-dot" style={{
          backgroundColor: isActive ? 'red' : ''
        }}
        onClick={handleClick} >
            { isActive ? bulletId + 1 : null }
            
        </div>
    );
};

export default Dot;

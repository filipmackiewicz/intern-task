import './css/main.css';
import Dot from "./Dot";
import {useState} from 'react';

function App() {

    const [select, setSelect] = useState(false);

    const handleSelect = key => {
      setSelect(key);
    };
  
    return (
        <div className="l-dots-wrapper">
            {new Array(20).fill('#000000').map((_, i) => (
                <Dot 
                key={i}
                status={select === i}
                id={i}
                onClick={() => handleSelect(i)}
                />
            ))}
        </div>
    );
}

export default App;

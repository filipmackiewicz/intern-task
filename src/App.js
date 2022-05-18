import './css/main.css';
import Dot from "./Dot";

function App() {
    return (
        <div className="l-dots-wrapper">
            {new Array(20).fill('#000000').map((_, i) => (
                <Dot key={i} id={i}/>
            ))}
            
        </div>
    );
}

export default App;

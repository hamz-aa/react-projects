import {useState} from 'react';

export function Count ({steps}) {
    const [count, setCount] = useState(0);

    function countHandler(){
        if(count < 0) setCount(0);
        return count;
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
        }}>
            <button onClick={() => setCount(count - steps)}>-</button>
            <p>Count : {countHandler()}</p>
            <button onClick={() => setCount(count + steps)}>+</button>
        </div>
    )   
}
import React, { useState, useEffect } from 'react'

export default function useStateHookTest() {

    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(countNow => countNow + 1);
        
    }
    function handleDecrement() {
        setCount(countNow => countNow - 1);
        
    }

    useEffect(() => {
        console.log(count);
    }, [count]);

    

   

    return (
        <div>
            <h3>useState Hook Test</h3>
            <p>Total number of renders:</p>
            <button type="button" onClick={handleIncrement}>+</button>
            <button type="button" onClick={handleDecrement}>-</button>
            <p>{count}</p>
            
        </div>
    )
}

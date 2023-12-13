import React, { useState } from 'react';
import Button from '../../component/Button';
import './Form1.css';

const Form1 = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div className='container'>
            <p className={`number ${counter < 0 ? 'negative' : 'positive'}`}>{counter}</p>
            <div className="row">
                <Button onClick={decrement} text="-" className='btn btn-decrement' />
                <Button onClick={increment} text="+" className='btn btn-increment' />
            </div>
        </div>
    )
}

export default Form1;
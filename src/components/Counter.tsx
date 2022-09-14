import React, {useState} from 'react';
import classes from './Counter.module.sass'

export const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button className={classes.button} onClick={increment}>increment</button>
            <p>{count}</p>
        </div>
    );
};

import React, {useState} from 'react';

const FunctionCounter = () => {
    const [count, setCount] = useState(0);
    //count - first is state variable, setCount - second is methos to update state variable
    //count - type definition(number) and count - value initalization(0)
    //method will run in async mode


    const increase = () =>{
        //update count variable
        setCount(count + 1);
    }
    return(
        <>

            <div>{count}</div>
            <button onClick={increase}>Increase Using useState</button>

        </>
    )
}

export default FunctionCounter;
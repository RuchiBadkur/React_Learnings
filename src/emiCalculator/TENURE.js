import React from 'react';
const TENURE = (props) => {
    return(
        <>
            <div className='row'>
                <div className='col-12'>
                    <h3>Enter Time</h3>
                    <input type='number' onChange={props.fn_time} placeholder='Enter Time' />
                    {/* <h4>{props.tenure} </h4> */}
                </div>
            </div>
        </>
    )
}

export default TENURE;
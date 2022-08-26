import React from 'react';
const INTEREST = (props) => {
    return(
        <>
            <div className='row'>
                <div className='col-12'>
                    <h3>Enter Rate </h3>
                    
                    
                    <input type='number' value={props.interestRate} onChange={props.fn_rate} placeholder='Enter Interest Rate' />
                  
                    {/* <h3>{props.interestRate}</h3> */}
                    {console.log('rate.....', props.interestRate)}
                   
                </div>
            </div>
        </>
    )
}

export default INTEREST;
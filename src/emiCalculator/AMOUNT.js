import React from 'react';
const AMOUNT = (props) => {
    return(
        <>
            <div className='row'>
                <div className='col-12'>
                    <h3>Enter Amount</h3>
                    <input type='number' value={props.principal} onChange={props.fn_principal} placeholder='Enter amount' />
                   
                </div>
            </div>
        </>
    )
}

export default AMOUNT;
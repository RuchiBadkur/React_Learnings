import React from 'react';
const FINAL = (props) => {
    return(
        <>
            <div className='row'>
                <div className='col-12'>
                    <h4>Amount - {props.finalAmount}</h4>
                    <h4>Interest - {props.finalAmount- props.principal}</h4>
                </div>
            </div>
        </>
    )
}

export default FINAL;
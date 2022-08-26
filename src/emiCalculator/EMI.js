import React, {useEffect, useState} from 'react';
import AMOUNT from './AMOUNT';
import TENURE from './TENURE';
import INTEREST from './INTEREST';
import FINAL from './FINAL';
import GRAPH from './GRAPH';


const EMI = () => {
    const[principal, setPrincipal] = useState(10000);
    const[interestRate, setInterestRate] = useState(7);
    const[tenure, setTenure] = useState(1);
    const[finalAmount, setFinalAmount] = useState(0);
    

    const amount = (event) => {
        setPrincipal(event.target.value)
    }

    const rate = (event) => {
        setInterestRate(event.target.value)
    }

    const time = (event) => {
        setTenure(event.target.value)
    }

    useEffect(() => {
        console.log('principal', principal)
        console.log('interestRate', interestRate)
        console.log('tenure', tenure)

        let final = 0;
        final = principal * Math.pow((1 + (interestRate/100)), tenure)
        setFinalAmount(final);
        console.log('finalresult:', final)
    })

    return(
        <>
            <div className='row text-start '>
                    <div className='col-12 bg-light bg-opacity-50 text-dark p-3'>
                        <AMOUNT principal={principal} fn_principal={amount}/>
                    </div>
                    <div className='col-12 bg-secondary bg-opacity-50 text-dark p-3'>
                    <TENURE tenure={tenure} fn_time={time}/>
                    </div>
                    <div className='col-12 bg-light bg-opacity-50 text-dark  p-3'>
                        <INTEREST interestRate={interestRate} fn_rate={rate} />
                    </div>
                    
                    <div className='col-6 bg-secondary bg-opacity-60 px-3 py-5'>
                        <FINAL principal={principal} finalAmount={finalAmount} interestRate={interestRate} />
                    </div>
                    <div className='col-6 bg-secondary bg-opacity-60 px-3 py-5'>
                        <GRAPH finalAmount={finalAmount}  principal={principal}/>
                    </div>
            </div>
        </>
    )
}

export default EMI;
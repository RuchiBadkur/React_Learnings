import React from 'react';

function FunctionalComponent(){
    var blahblah = 'dsfwrgfieuf';
    let obj = {
        name: 'ruchi',
        age: 20
    }
    var arr = [1,2,3,4,5,5];

    const fn = () => {
        console.log('sdfse');
    }

    return(
        <>
        <div>{blahblah}</div>
         Sum = {5+2143432} {/*expression*/}

        {fn}

        obj = {obj.name}
        {/* arr = {arr} */}

        {arr.map((item) => (
            <div>{item}</div>
        ))}


        {/* if else */}

         {/* {function() {
            
         }} */}
        
        </>
    )
}

export default FunctionalComponent;
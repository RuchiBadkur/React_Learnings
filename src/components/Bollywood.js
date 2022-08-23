import React,{useState} from 'react';
import BollywoodChild from './BollywoodChild';
import '../css/myStyles.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Col, Row, Button} from 'react-bootstrap';


const Bollywood = () => {

    const [showPara, setShowPara] = useState(false);
    const [showHemesphere, setShowHemesphere] = useState('');
    const [countrylist, setCountrylist] = useState(['India', 'UK', 'USA', 'Russia', 'South Africa', 'Mexico']);
    // const countrylist = ''    


    const changePara = () => {
        setShowPara(!showPara)
    }

    const displayNorth = () => {
        setShowHemesphere('North Hemesphere')
    }
    const displaySouth = () => {
        setShowHemesphere('South Hemesphere')
    }
    return(
        <>

            <div>------------------------------------</div>
            <div>Bollywood Movie name</div>
            <BollywoodChild  temp='Runway 34 passing props from parent bollywood to functional component'/>
            <div>------------------------------------</div>

            <br></br>
            <div>------------------------------------</div>

            {/* if else - condition && (do this thing)
            ternary - ? : */}
            <div>Show Hide Paragraph</div>
            <Button variant="dark" onClick={changePara}>Click</Button>
            {/* <button  className='btn btn-secondary btn-sm' onClick={changePara}>Click</button> */}
            {showPara === true &&(<p>siafiufhiweuf sdjfhsduf ewfiuhewfu</p>)}

            <div>------------------------------------</div>

            <br></br>
            <div>------------------------------------</div>
            <div>Ternary operator</div>
            <button className='btn btn-warning btn-sm'  onClick={displayNorth}>India</button>
            <button className='btn btn-danger btn-sm'  onClick={displayNorth}>USA</button>
            <button className='btn btn-secondary btn-sm'  onClick={displayNorth}>UK</button>
            <button className='btn btn-info btn-sm'  onClick={displayNorth}>Russia</button>
            <button className='btn btn-success btn-sm'  onClick={displayNorth}>Australia</button>
            <button className='btn btn-secondary btn-sm'  onClick={displaySouth}>New Zealand</button>
            <button className='btn btn-light btn-sm'  onClick={displaySouth}>South Africa</button>
            <button className='btn btn-dark btn-sm'  onClick={displaySouth}>Mexico</button>
            <br/>
            Hemisphere - {
                (showHemesphere !== '') && (showHemesphere === 'North Hemesphere' ? <span>North</span> : <span>South</span>)
            }
            <div>------------------------------------</div>
            <br></br>

            <div>------------------------------------</div>
            <span>{'List & Keys'}</span>
            <br></br>
            <ul>
            {
                // <ul>
                //     for(i=0) {
                //         <li>{country name}</li>
                //     }
                //     array.map
                //     array.forEach
                //     for in (arr), for of(object)
                // </ul>

                countrylist && countrylist.map((item, index) => {
                    return (<li key={item + index}>{item}</li>)
                })
            }
            </ul>
            <div>------------------------------------</div>
            
        </>
    )
}

export default Bollywood;


// Reference No:	220823756499
// Application No:	320220126877988 
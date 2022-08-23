import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap'

const Menubar = () => {
    return(
          <div className='row bg-light bg-opacity-40 '>
            <div className='col-12 text-center '>
                <Navbar>
                    <Link to='/Home' className='nav-link btn btn-dark btn-lg col-1'>Home</Link>
                    <Link to='/FunctionalComponent' className='nav-link btn btn-danger col-1'>FunctionalComponent</Link>
                    <Link to='/Counter' className='nav-link btn btn-secondary col-1'>Counter</Link>
                    <Link to='/Bollywood' className='nav-link btn btn-warning col-1'>Bollywood</Link>
                    <Link to='/BollywoodChild' className='nav-link btn btn-info col-1'>BollywoodChild</Link>
                    <Link to='/FunctionCounter' className='nav-link btn btn-outline-success col-1'>FunctionCounter</Link>
                </Navbar>
            </div>
          </div>
    )
}

export default Menubar;
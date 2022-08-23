import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
          <div className='row'>
            <div className='col-12 col-2 bg-light bg-opacity-40'>
                <Navbar>
                    <Link to='/Home'>Home</Link>
                    <Link to='/FunctionalComponent'>FunctionalComponent</Link>
                    <Link to='/Counter'>Counter</Link>
                    <Link to='/Bollywood'>Bollywood</Link>
                    <Link to='/BollywoodChild'>BollywoodChild</Link>
                    <Link to='/FunctionCounter'>FunctionCounter</Link>
                </Navbar>
            </div>
          </div>
    )
}

export default Navbar;
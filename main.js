import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
// import Login from './Login';
import './CA1.css';
// import Nav from './nav';
function Navi() {
    return ( <>
    {/* <Router> */}
    {/* <Nav/> */}
    <div className='tot'>
    {/* <div className='img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFH42xPvaD30MhQeOhjk0xkTg4tHw4f8Q0_ct49T7AxA&s'/>   
    </div> */}
          <div className='nav'>
            <div className='div'>
                <Link to='/Get'className='but' >Search Profile</Link>
            </div>
            <div className='div'>
                <Link to='/Font' className='but' >SignIn</Link>
            </div>
            <div className='div'>
                <Link to='/Delete' className='but' >Delete User</Link>
            </div>
            <div className='div'>
                <Link to='/Update' className='but' >Update User</Link>
            </div>
            {/* <div className='div'>
                <Link to='/' className='ele'></Link>
            </div> */}
            {/* <div className='div'>
                <Link to='/Update' className='ele'>Update Profile</Link>
            </div> */}
            {/* <div className='ele'>
                <Link to='/Find' className='ele'>Find User</Link>
            </div> */}
          </div>
          </div>
    {/* </Router> */}
    </> );
}

export default Navi;
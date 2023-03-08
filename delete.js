
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Find from './get';
import './CA1.css'
function Delete() {
    const [id ,setId] = useState();
    const [error, setError] = useState('')
    const[myData,setMyData]=useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/car")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            // .catch((error) => setIsError(error.message));
    }, []);
    function del() {
        const length = Object.keys(myData).length;
        // event.preventDefault();
        let f = 0;
        for (let i = 0; i < length; i++) {
        // useEffect(() => {
            if (Number(id) === myData[i].id) {
                f = 1;
        axios
            .delete('http://localhost:8080/car?id=' +id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    //  []);
    }
        if (f === 0) {
            alert('User Does Not Exists');
        }
}
    //  []);
    // }
    return (
        <>
            <div className='del'>
            <h2>Delete User</h2>

            <div className='inp'>
                <input type="number" placeholder='Enter Id' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>
                </input>
                
            </div>
             <div className='buts'>
                
             &nbsp;<button type="submit" class="btn btn-primary" onClick
                ={del} style={{padding:12,borderRadius:10,backgroundColor:'Tomato'}}>Submit</button>            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" class="btn btn-primary"style={{padding:12,borderRadius:10,backgroundColor:'Tomato'}}
                > <Link to='/main' className='link'>Back</Link></button>
             </div>
            {/* <Link to='/'> */}
            {/* </Link> */}
            <h2>
                {error}
            </h2>
            <div className='Find'>
                {/* <Find /> */}
            </div>
            </div>
        </>
    );
}

export default Delete;
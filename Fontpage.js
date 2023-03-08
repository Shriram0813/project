import '../App.css';
import { useState } from 'react';
import axios from 'axios';
// import { green } from '@mui/material/colors';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './CA1.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import profile from "./image/a.png";
// import email from "./image/email.jpg";
// import pass from "./image/pass.png";
function FontPage() {
    const[id,setId]=useState('');
    const[carName,setcarName]=useState("");
    const[brand,setBrand]=useState();
    const[rentalprice,setRentalprice]=useState("");
    const[seater,setSeater]=useState();
    const[fueltype,setFuelType]=useState();
    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/car",
                {

                    id:id,
                    carName:carName,
                    brand:brand,
                    rentalprice:rentalprice,
                    seater:seater,
                     fueltype:fueltype
                 }

                );
            alert("Regisrtation Successfully");
            setId();
            setcarName("");
            setBrand("");
            setRentalprice();
            setSeater();
            setFuelType("");


        }
        catch (err) {
            alert("User Registation Failed");
        }
    }
    
  return (
  <div className='login-box'>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9oDq8rMYrlwUa1iYtxonc-6kkVqe5u5wN-t2nbupwpTkY1qKWg58gkbDMhCRodgpipM&usqp=CAU" class="avatar"></img>
		<h1>Details</h1>
		<form>
			{/* <p>Id</p>
			<input type="text" name="username" placeholder="Enter Username"/> */}
			<p>Id</p>
			<input type="text" name="password" placeholder="Enter Id" value={id} onChange={(event) => {
                    setId(event.target.value);
                }}/>
      <p>CarName</p>
			<input type="text" name="username" placeholder="Enter Username" value={carName} onChange={(event) => {
                    setcarName(event.target.value)}}/>
			<p>Brand</p>
			<input type="text" name="password" placeholder="Enter Brand" value={brand} onChange={(event) => {
                    setBrand(event.target.value)}}/>
      <p>RentalPrice</p>
      <input type="text" name="username" placeholder="Enter RentalPrice" value={rentalprice} onChange={(event) => {
                    setRentalprice(event.target.value)}}/>
			{/* <input type="submit" name="submit" value="Login"/> */}
      <p>Seater</p>
      <input type="text" name="username" placeholder="Enter Seater" value={seater} onChange={(event) => {
                    setSeater(event.target.value)}}/>
			{/* <input type="submit" name="submit" value="Login"/> */}
      <p>FuelType</p>
      <input type="text" name="username" placeholder="EnterEmail" value={fueltype} onChange={(event) => {
                    setFuelType(event.target.value)}}/>
			{/* <input type="submit" name="submit" value="Submit"/> */}
   			<div class="invit-only">				
			</div>
			<button type="submit" class="btn btn-primary" onClick={save} style={{padding:12,borderRadius:10,backgroundColor:'Tomato'}}>Submit</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary"style={{padding:12,borderRadius:10,backgroundColor:'Tomato'}}
                > <Link to='/main' className='but'>Back</Link></button>
		</form>
	</div>
  );
}

export default FontPage;
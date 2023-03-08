import { useState, useEffect } from "react";
import "./CA1.css";
import axios from "axios";
import {Link }from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8080/car")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    return (
        <>
            {isError !== "" && <h2>{isError}</h2>}
              
            <div className="">
                <table className="tables">
            {/* <h1>All users</h1> */}
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>ID</th>
                            <th>CarName</th>
                            <th>BrandName</th>
                            <th>RentalPrice</th>
                            <th>FuelType</th>
                            <th>Seater</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.carName}</td>
                                        <td>{data.brand}</td>
                                        <td>{data.rentalprice}</td>
                                        <td>{data.fueltype}</td>
                                        <td>{data.seater}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button class="btn btn-primary" style={{padding:12,borderRadius:10,backgroundColor:'white',marginLeft:950 ,marginTop:50}}>
                <Link to='/main' className="but">Back</Link>
                </button>
            </div>
        </>
    );
};

export default App;
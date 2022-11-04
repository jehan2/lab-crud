import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
    const navigate = useNavigate();
    const [fName, setFName] = useState()
    const [lName, setLName] = useState()
    let url = "https://6362424b66f75177ea2a998e.mockapi.io/ToDo"

    const postData = () => {
        axios.post(url, {
            fName,
            lName
        })

            .then(res => {
                console.log(res);
                localStorage.setItem("fName", res.data.fName)
                localStorage.setItem("lName", res.data.lName)
                localStorage.setItem("id", res.data.id)
                navigate("/Read");
            })
    }
    return (
        <div>

            <input placeholder='fName' onChange={e => { setFName(e.target.value) }}></input>
            <input placeholder='lName' onChange={e => { setLName(e.target.value) }}></input>

            <button onClick={postData}>LogIn</button>

        </div>
    )
}

export default Create;
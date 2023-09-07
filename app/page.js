// import React from 'react';
"use client"
import MyButton from "./myButton";
import { useState } from 'react';
import Profile from './profile.js'
function firstPage() {
    const [i,changeA] = useState(0);
    function Change() {
        changeA(i+1);
    }
    return ( 
        <div>

            <div className="font-bold text-5xl" id="Hellow">Hello World {i}</div>
            <MyButton/>
            <button onClick={Change} className="m-5">Say helloWorld</button>
            <Profile/>
        </div>
     );
}

export default firstPage;
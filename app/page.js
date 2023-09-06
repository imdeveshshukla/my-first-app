// import React from 'react';
"use client"
// import { useState } from "react"0;
import myButton from "./myButton";
import { useState } from 'react';
import Profile from './profile.js'
function firstPage() {
    const [i,changeA] = useState(10)
    return ( 
        <div>

            <myButton/>
            <div className="font-bold text-5xl" id="Hellow">Hello World {i}</div>
            <Profile/>
        </div>
     );
}

export default firstPage;
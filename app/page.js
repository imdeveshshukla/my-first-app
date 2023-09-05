// import React from 'react';

// import { useState } from "react"0;
import Profile from './profile.js'
function firstPage() {
    const i = 10;
    
    return ( 
        <div>
            <div className="font-bold text-5xl" id="Hellow">Hello World {i}</div>
            <Profile/>
        </div>
     );
}

export default firstPage;
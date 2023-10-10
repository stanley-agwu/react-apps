import React, {useContext} from 'react';
import {BookContext} from "../contexts/BookContext"

const Navbar = () => {
    const { books }= useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>5 Stack Book App</h1>
            <p>You currently have { books.length } books on your shelf.</p>
        </div>
     );
}
 
export default Navbar;


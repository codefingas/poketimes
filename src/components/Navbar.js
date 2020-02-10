import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {

    return (
       <nav className="nav-wrapper red darken-3">
           <div className="container">
               <a href="/" className="brand-logo">Poke Times</a>

               <ul className="right">
                   <li>
                       <Link href="/">Home</Link>
                   </li>
                   <li>
                        <Link href="/about">About</Link>
                   </li>
                   <li>
                    <Link href="/contact">Contact</Link>
                   </li>
               </ul>
           </div>
       </nav>
    )
};

export default Navbar; 
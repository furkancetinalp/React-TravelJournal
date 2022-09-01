import React from "react";
import { FaGlobeAmericas } from 'react-icons/fa';

function Navbar()
{
    return(
        <nav>
            <h3><FaGlobeAmericas className="globe--icon"/> my travel journal</h3>
        </nav>
    )
}
export default Navbar;
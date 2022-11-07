import React from "react";
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";

function Header()
{
    return( <>
    <header className="absolute flex items-center justify-between px-10 w-full text-white">
        <div>
            <Link to="/"> 
                <SiSpacex className="text-8xl text-white" /> Home
            </Link> 
        </div>
    
    <nav>
        <ul>
        <li>
              <Link to="/capsules" className="text-white text-sm lg:text-base">
                Capsules
              </Link>
            </li>
            </ul>
            <br></br>
            <ul>
            <li>
            <Link to="/capsulessearch" className="text-white text-sm lg:text-base">
                CapsulesSearch
              </Link>
            </li>
        </ul>
    </nav>
    
    </header>

        </>
    )
}
export default Header;
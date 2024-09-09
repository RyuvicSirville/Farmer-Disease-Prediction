import React from "react";
import footerlogo from '/img/krusakLogo.jpeg'

const Footer = () => {
    return(
        <div id="footer" className="flex justify-between flex-wrap gap-16 items-center" >
            <div id="footer-left" className="flex gap-3 items-center flex-wrap">
                <button >
                <img src={footerlogo} className="w-11" alt="navbarlogo" />
                </button>
                <div id="footer-text" className="text-justify">
                </div>
            </div>
            <div id="footer-right">
                <ul className="flex gap-6 pl-0">
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white">Youtube</a>
                        </li>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
                        </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
                        </li>
                </ul>
            </div>
           
        </div>
    )
}

export default Footer
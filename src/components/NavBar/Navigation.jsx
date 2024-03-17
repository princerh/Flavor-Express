import React from 'react';
import icon from "/assets/greenIcon.png";

const Navigation = () => {

    const handleSearch = (event) => {
        event.preventDefault();
        document.getElementById("search").focus();
    }

    return (
        <div>
            <div className="flex justify-between items-center bg-base-100">
                <div className="flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li onClick={handleSearch}><a href="#">Search</a></li>
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Flavor Express</a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[20px]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-4 ">
                    <label className="input input-bordered  items-center py0 gap-2 hidden lg:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-4 opacity-70">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                        <input id="search" type="text" className="grow" placeholder="Search" />
                    </label>
                    <img className="mr-2 lg:mr-0" src={icon} />
                </div>
            </div>
            <div className="mx-3 mt-3">
                <label className="input input-bordered  items-center py-0 gap-2 flex lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-4 opacity-70">
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow" placeholder="Search" />
                </label>
            </div>
        </div>
    );
};

export default Navigation;

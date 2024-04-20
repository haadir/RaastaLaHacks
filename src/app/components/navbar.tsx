import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">Raasta</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li><Link href="/chat">Chat</Link></li>
        <li><a>Map</a></li>
        <li>
            <details>
            <summary>
                Profile
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Favorites</a></li>
                <li><a>Logout</a></li>
            </ul>
            </details>
        </li>
        </ul>
    </div>
    </div>
  );
};

export default Navbar;

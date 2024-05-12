import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <span className="btn btn-ghost text-xl">Raasta</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/chat">
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link href="/map">
              <span>Map</span>
            </Link>
          </li>
          <li>
            <details>
              <summary>Profile</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link href="/favorites">
                    <span>Favorites</span>
                  </Link>
                </li>
                <li>
                  <Link href="/logout">
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react'
import Logo from '../assets/logo-2.gif'

import { Outlet, Link } from "react-router-dom";


const Header = () => {
  return (
    <>
        <nav
        aria-label="Site Nav"
        class="lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 mx-auto flex items-center justify-between p-4 border border-black shadow-black shadow-xl bg-c1/30 backdrop-blur-md rounded-xl"
        >
        <Link
            to='/'
            class="inline-flex h-14 w-14 items-center justify-center rounded-lg text-4xl"
        >
            <span class="sr-only"></span>
            <img src={Logo} />
        </Link>

        <ul class="flex items-center gap-2 text-sm font-medium text-black">
            <li>
                <Link class="rounded-lg px-3 py-2 hover:text-white" to="/contact"> Contact me </Link>
            </li>
            <li>
                <Link class="rounded-lg px-3 py-2 hover:text-white" to="/tools">Tools </Link>
            </li>

        </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Header;

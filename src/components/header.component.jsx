import React from 'react'

const Header = () => {
  return (
    <nav
    aria-label="Site Nav"
    class="mx-auto flex items-center justify-between p-4 border border-black shadow-black shadow-xl bg-c1/30 backdrop-blur-md rounded-xl"
    >
    <a
        href="/"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-4xl"
    >
        <span class="sr-only"></span>
        👋
    </a>

    <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li class="hidden lg:block">
        <a class="rounded-lg px-3 py-2" href="/"> Home </a>
        </li>

        <li><a class="rounded-lg px-3 py-2" href=""> Projects </a></li>

        <li>
        <a
            class="inline-flex items-center rounded-lg px-3 py-2"
            href=""
            target="_blank"
        >
            External
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="ml-1.5 h-4 w-4"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
            </svg>
        </a>
        </li>
    </ul>
    </nav>
  )
}

export default Header;

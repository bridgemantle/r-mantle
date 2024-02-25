import React from 'react'
import { HamburgerSVG, MantleSVG } from './SVGComponents'
import { Link, useLocation, } from 'react-router-dom'

const ul = [
    {
        name: "Doc",
        to: 'https://docs.mantle.xyz/'
    },
    {
        name: "Migrate",
        to: '/migrate'
    }, {
        name: "Bridge",
        to: '/'
    }
]

export default function Navbar() {
    const { pathname } = useLocation()

    return (
        <nav className=''>
            <div className="mx-auto max-w-7xl p-4 lg:px-8 items-center justify-between flex">
                <Link href="/">
                    <MantleSVG />
                </Link>

                <ul className='hidden lg:flex justify-center gap-6 xl:gap-12 '>
                    {ul.map((item, index) => (
                        <li
                            className='relative'
                            key={index}
                        >
                            <Link
                                to={item.to}
                                className='text-[#c4c4c4] hover:text-white font-medium'
                                target={index === 0 ? '_blank' : '_self'}

                            >
                                {item.name}
                            </Link>
                            {pathname === item.to && <div className="rounded-full bg-white h-1 w-1 absolute left-[50%] -bottom-[10px]"></div>}
                        </li>
                    ))}
                </ul>

                <button
                    className='hidden lg:inline-flex rounded-lg text-md font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2 text-sm text-black bg-[rgb(101,179,174)] hover:bg-[#4d9d98] disabled:hover:bg-transparent'
                >
                    Connect Wallet
                </button>

                <button
                    className='lg:hidden p-2.5'
                >
                    <HamburgerSVG />
                </button>

            </div>

        </nav>
    )
}

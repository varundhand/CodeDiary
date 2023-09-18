"use client"

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn, signOut, useSession, getProviders} from 'next-auth/react' // custom next hooks for authentication

const Nav = () => {
  const {data: session} = useSession()
  // const {data: session, data: {user : {name}}, data: {user : {image}}} = useSession() //! Wrong Approach: As useSession is async, it takes time to fetch the session user, hence we cant destructure directly

  console.log(session)

  // for authentication 
  const [providers,setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown]=  useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response)
    }
 
    setUpProviders();
  },[])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex gap-2 flex-center">
        <Image
          src='../assets/images/temp-logo.svg'
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">CodeDaily</p>
      </Link>

      {/* Navbar For Desktop Application */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5"> 
            <Link href='/create-post' className='black_btn'>New Entry</Link>
            <button type="button" className="outline_btn" onClick={signOut}>Sign Out</button>
            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full border-double border-1 border-black"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"  
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>

      {/* {alert(session?.user)} */}

      {/* Navbar for Mobile Application */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
             <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full border-double border-1 border-black"
                alt="profile"
                onClick={() => setToggleDropdown((prev )=> !prev)} 
              />

              {/* {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href='/profile'
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href='/create-post'
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    New Entry
                  </Link>
                  <button
                    type="button"
                    onClick={()=> {
                      setToggleDropdown(false);
                      signOut()
                    }} 
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )} */}
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
            
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
                </div>
                <div className="py-1" role="none">
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
                </div>
                <div className="py-1" role="none">
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
                </div>
                <div className="py-1" role="none">
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
              </div>
            </div>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"  
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav

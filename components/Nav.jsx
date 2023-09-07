"use client"

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn, signOut, useSession, getProviders} from 'next-auth/react' // custom next hooks for authentication

const Nav = () => {
  const {data: session} = useSession()
  console.log('session', session)

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
                src='/assets/images/temp-profile.jpg'
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
                src='/assets/images/temp-profile.jpg'
                width={37}
                height={37}
                className="rounded-full border-double border-1 border-black"
                alt="profile"
                onClick={() => setToggleDropdown((prev )=> !prev)} 
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href='/profile'
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href='/create-prompt'
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
              )}
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

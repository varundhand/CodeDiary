"use client"

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn, signOut, useSession, getProviders} from 'next-auth/react' // custom next hooks for authentication

const Nav = () => {
  const isUserLoggedIn = true

  // for authentication 
  const [providers,setProviders] = useState(null)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response)
    }
 
    setProviders();
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
        {isUserLoggedIn ? (
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

      {/* Navbar for Mobile Application */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
             <Image
                src='/assets/images/temp-profile.jpg'
                width={37}
                height={37}
                className="rounded-full border-double border-1 border-black"
                alt="profile"
                onClick={() => {}} 
              />
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

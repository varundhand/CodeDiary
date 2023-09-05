'use client'

// we would ultimately wrap this Provider Component over others
import { SessionProvider } from "next-auth/react" // session provider is the context provider which needs to be wrapped around the outermost component 

const Provider = ({children,session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider

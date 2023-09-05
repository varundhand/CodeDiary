import '@/styles/global.css'
import Meta from '@/components/Meta'
import Head from 'next/head'

import Nav from '@/components/Nav'
import Provider from '@/components/Provider' // needs to be wrapped around the outermost component, which is layout


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>

      <Provider>
        <Head>
          <Meta/> {/* for Custom Meta Data */}
        </Head>

        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav/>
          {children}
        </main>
      </Provider>

      </body>
    </html>
  )
}

export default RootLayout

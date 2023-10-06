import '@/styles/global.css'
// import Meta from '@/components/Meta'
import Head from 'next/head'

import Nav from '@/components/Nav'
import Provider from '@/components/Provider' // needs to be wrapped around the outermost component, which is layout

import { Toaster } from 'react-hot-toast'
import metaDataProfile from 'public/assets/images/metadata-profile.png'

import {Providers} from './GlobalRedux/provider'

export const metadata = {
  title: "Code Diary",
  keywords:
    "coding, programming, development, learning, daily, progress, journey, community",
  description:
    "Code Diary is a platform for sharing your daily coding progress. Connect with other developers and learn from each other. Stay motivated and on track to reach your coding goals.",
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>

      <Provider>
        <Head>
          <title>{metadata.title}</title>

          <meta name="keywords" content={metadata.keywords} />
          <meta name="description" content={metadata.description} />

          <meta property="og:title" content="Code Diary" />
          <meta property="og:description" content="Your Everyday Coding Journal" />
          <meta property="og:image" content={metaDataProfile}/>
        </Head>

        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Providers> {/* RTK PROVIDER */}
            <Nav/>
            <Toaster position="top-center" reverseOrder={false}/>
            {children}
          </Providers>
        </main>
      </Provider>

      </body>
    </html>
  )
}

export default RootLayout

import '@/styles/global.css'
import Meta from '@/components/Meta'
import Head from 'next/head'


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>

        <Head>
          <Meta/> {/* for Custom Meta Data */}
        </Head>

        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {children}
        </main>

      </body>
    </html>
  )
}

export default RootLayout

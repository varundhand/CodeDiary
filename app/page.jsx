// "use client"

import Feed from "@/components/Feed"
import Heading from "@/components/Heading"
import dynamic from "next/dynamic"

const Home = () => {

  //! for typewritter animation
  // const DynamicComponentWithNoSSR = dynamic(
  //   () => import('@/components/Heading'),
  //   { ssr: false }
  // )
  

  return (
    <section className="w-full flex-center flex-col relative">
      {/* <DynamicComponentWithNoSSR/> */}
      <Heading/>
      {/* <h1 className="head_text text-center overflow-hidden">
        <div className="text first-text">Discover & Share</div> 
        <br className="max-md:hidden" />
        <span className="text sec-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] orange_gradient text-center"> Your Journey</span>
      </h1> */}
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt non et libero vero vitae commodi,  Velit exercitationem vitae veniam.
      </p>

      <Feed/>
    </section>
  )
}

export default Home

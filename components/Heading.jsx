"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter"

const Heading = () => {

  const [text] = useTypewriter({
    words: ['Discover', 'Code', 'Share', 'Repeat'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })


  return (
    <>   
      <h1 className="head_text text-center ">
        <div className="text ">Your Coding Journey</div> 
        {/* <br className="max-md:hidden" /> */}
        <span  className="text orange_gradient text-center"> {text}</span>
        <span>
          <Cursor cursorStyle='|'/>
        </span>
      </h1>
    </>
  )
}

export default Heading

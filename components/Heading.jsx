"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter"

const Heading = () => {

  const [text] = useTypewriter({
    words: ['Yeet', 'Lmao', 'Hehehe'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })


  return (
    <>   
      <h1 className="head_text text-center ">
        <div className="text ">Discover & Share</div> 
        {/* <br className="max-md:hidden" /> */}
        <span  className="text orange_gradient text-center"> {text}</span>
        <span>
          <Cursor cursorStyle='|'/>
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt non et libero vero vitae commodi,  Velit exercitationem vitae veniam.
      </p>
    </>
  )
}

export default Heading

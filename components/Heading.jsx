"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter"

const Heading = () => {

  const [text] = useTypewriter({
    words: ['Yeet', 'Lmao', 'Hehehe'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  // const ref = useRef(null)
  // // const text = ref.current.textContent
  // const text = ref ? ref.current : document.querySelector('.sec-text')
  // console.log(text);
  // // const text = document.querySelector(".sec-text")

  // const textLoad = () => {
  //   setTimeout(() => {
  //     text.textContent = "Your Journey"      
  //   }, 0);
  //   setTimeout(() => {
  //     text.textContent = "LMAo"      
  //   }, 4000);
  //   setTimeout(() => {
  //     text.textContent = "ROFL"      
  //   }, 8000);
  // }

  // textLoad()
  // setInterval(textLoad,12000)

  return (
    <>   
      <h1 className="head_text text-center ">
        <div className="text first-text">Discover & Share</div> 
        {/* <br className="max-md:hidden" /> */}
        <span  className="text sec-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] orange_gradient text-center"> {text}</span>
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

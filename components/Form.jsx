import Link from "next/link"
import { useState } from "react"

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {BsEmojiSmile} from 'react-icons/bs'

import { usePathname } from "next/navigation"

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  const [showEmojis, setshowEmojis] = useState(false);

  const pathName = usePathname()

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((element) => codeArray.push("0x" + element));
    let emoji = String.fromCodePoint(...codeArray)
    setPost(prevPost => ({...prevPost, description: post.description + emoji}))
    setshowEmojis(false)
  }

  // const handleClickOutsideEmojisTab = () => { //TODO: Add onClick feature to automatically close emoji tab instead of regular button click
  //   setshowEmojis(false)
  // }

  return (

    <section className='w-full max-w-full flex flex-col items-center'>
      
      
      <h1 className="head_text text-center">
        <span className="orange_gradient text "> {type} Post</span>
      </h1>
      <p className="desc text-center max-w-md">
        Share your coding journey with the world.
      </p>

      <form 
        onSubmit={handleSubmit}
        className="mt-10 mb-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-black'>
            Your Post's Description
          </span>
        
          <div className="flex relative">
            <textarea
              value={post.description}
              onChange={(e) => setPost({...post, description: e.target.value})}
              placeholder="What's On Your Mind Today?"
              required
              className="form_textarea "
            />
            <span 
              className='mt-2 absolute top-2 right-2 opacity-40 hover:opacity-100'
              onClick={() => setshowEmojis(!showEmojis)}
            >
              <BsEmojiSmile/>
            </span>
            <div className="absolute top-[20%] opacity-80 right-1 z-10">
              {showEmojis && <Picker data={data} onEmojiSelect={addEmoji} /> }
            </div>
          </div>

        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-black'>
            Tags {` `}
            <span className="font-normal">(Type your tags, separated by spaces)</span>
          </span>

          <input
            value={post.tags}
            onChange={(e) => setPost({...post, tags: e.target.value})}
            placeholder="Your Tags"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-2 gap-4">
          <Link 
            href={ (pathName !== '/update-post' ) ? '/' : '/profile'}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Cancel
            </span>
          </Link>

          <button 
            type='submit'
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            disabled={submitting}  
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {submitting ? `${type}...` : type }
            </span>
          </button>

        </div>

      </form>

    </section>

  )
}

export default Form

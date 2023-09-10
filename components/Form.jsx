import Link from "next/link"

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (

    <section className="w-full max-w-full felx-start flex-col">
      <h1 className="head_text text-left">
        <span className="orange_gradient text "> {type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        What's on your mind about coding today?
      </p>

      <form 
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-black'>
            Your Post's Description
          </span>

          <textarea
            value={post.description}
            onChange={(e) => setPost({...post, description: e.target.value})}
            placeholder="Write Your Post Here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-black'>
            Tags {` `}
            <span className="font-normal">(#product, #webdevelopment, #dsa, #100daysofcoding)</span>
          </span>

          <input
            value={post.tags}
            onChange={(e) => setPost({...post, tags: e.target.value})}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-2 gap-4">
          <Link 
            href='/'
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
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {submitting ? `${type}...` : type }
            </span>
          </button>

        </div>

      </form>

    </section>

  )
}

export default Form

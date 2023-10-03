'use client'

import { useSession } from "next-auth/react"
import useTimeAgo from "@/hooks/useTimeAgo"
// import { useState } from "react"
import Image from "next/image"
import { usePathname,useRouter } from "next/navigation"
// import { useSession } from "next-auth/react"
// import { usePathname,useRouter } from "next/navigation"

const PostCard = ({ post,handleTagClick,handleEdit,handleDelete}) => {
  const {data:session} = useSession()
  const pathName = usePathname()

  // const router = useRouter()
  // const dateString = post.createdAt

  return (
    <div className="prompt_card">
      <div className="flex flex-col justify-between items-start gap-5">
        <div className="flex gap-3 justify-between items-center">
          <div className=" flex items-center gap-3 cursor-pointer">

              <Image
                src={post.creator.image}
                alt='user_image'
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <div className="flex flex-col">
                <h3 className="font-satoshi font-semibold text-gray-900">
                  {post.creator.username}
                </h3>
                <p className="font-inter text-sm text-white italic" style={{overflowWrap:'anywhere'}} >
                  {post.creator.email}
                </p>
              </div> 
          </div>

          <div className="text-xs font-thin ">
            {useTimeAgo(post.createdAt)}
          </div>
        </div>

        <p className='my-4 font-satoshi font-semibold text-sm text-gray-800'>{post.description}</p>
        <p className="font-bold">
          #{post.tags}
        </p>
        {/* Edit Functionality */}
        {session?.user.id === post.creator._id && pathName === '/profile' && (
            <div className="mt-5 flex-center gap-4 border-t border-gray pt-3">
              <p
                className="font-inter font-bold text-sm green_gradient cursor-pointer"
                onClick={handleEdit}
              >
                Edit
              </p>
              <p
                className="font-inter font-bold text-sm red_gradient cursor-pointer"
                onClick={handleDelete}
              >
                Delete
              </p>
            </div>
        )}

      </div>
    </div>
  )
}

export default PostCard

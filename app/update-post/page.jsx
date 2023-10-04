'use client'

import {useState,useEffect } from 'react'
import { useRouter ,useSearchParams} from 'next/navigation'
import Form from '@/components/Form'

import toast from 'react-hot-toast'

const EditPost = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const postId = searchParams.get("id")
//   console.log(postId)


  const [submitting, setsubmitting] = useState(false);
  const [post, setPost] = useState({
    description: '',
    tags: ''
  })
  
  useEffect(() => {
    const getPostDetails = async () => {
        const response = await fetch(`/api/posts/${postId}`)
        const data = await response.json()
        // console.log(data)

        setPost({
            description: data.description,
            tags: data.tags //! Check this
        })
        // console.log(post);
    }

    if(postId) getPostDetails()
  }, [postId])

  const updatePost = async (e) => {
    e.preventDefault();
    setsubmitting(true)

    if (!postId) return alert("Post ID not found :'(")

    try{
      const response = await fetch(`/api/posts/${postId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          description: post.description,
          tags: post.tags
        })
      })

      if (response.ok){
        // console.log('post updated successfully!');
        toast('Post updated successfully!', {
          icon: '📝',
        });
        router.push('/')
      }
        
    }catch(error){
      console.error(error)
    }finally{
      setsubmitting(false)
    }
  }

  return (
    <Form
      type="Edit"
      post = {post}
      setPost = {setPost}
      submitting = {submitting}
      handleSubmit = {updatePost}
    />
  )
}

export default EditPost

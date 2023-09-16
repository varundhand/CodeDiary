'use client'

import {useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@/components/Form'

const CreatePost = () => {
  const router = useRouter();
  const {data:session} = useSession();
  // console.log(session)

  const [submitting, setsubmitting] = useState(false);
  const [post, setPost] = useState({
    description: '',
    tags: ''
  })
  // const router = useRouter()

  const createPost = async (e) => {
    e.preventDefault();
    setsubmitting(true)

    try{
      const response = await fetch('/api/posts/new',
      {
        method: 'POST',
        body: JSON.stringify({
          description: post.description,
          userId: session?.user.id,
          tags: post.tags
        })
      })

      if (response.ok){
        router.push('/')
      }
        
    }catch(error){
      console.log(error, 'in here');
    }finally{
      setsubmitting(false)
    }
  }

  return (
    <Form
      type="Create"
      post = {post}
      setPost = {setPost}
      submitting = {submitting}
      handleSubmit = {createPost}
    />
  )
}

export default CreatePost

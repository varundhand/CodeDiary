'use client'

import {useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Form from '@/components/Form'

const CreatePost = () => {
  const [submitting, setsubmitting] = useState(false);
  const [post, setPost] = useState({
    description: '',
    tag: ''
  })

  const createPost = async (e) => {
    
  }

  return (
    <Form
    
    />
  )
}

export default CreatePost

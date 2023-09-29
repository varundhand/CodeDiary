"use client"

import { useState,useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router" //TODO: import from "next/navigation" from docs

import Profile from "@/components/Profile"

const MyProfile = () => {
  const {data: session} = useSession()

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await response.json()
      // console.log(data);
      setPosts(data) 
      setLoading(false)
    }

    if (session?.user.id)fetchPosts()
  }, []) 



  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = response.json()

    setPosts(data)
  }

  const handleEdit = async () => {

  }

  const handleDelete = async () => {

  }

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile

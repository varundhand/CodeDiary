"use client"

import { useState,useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation" 

import Profile from "@/components/Profile"

const MyProfile = () => {
  const {data: session} = useSession()
  const router = useRouter()

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await response.json()
      // console.log(data);
      setPosts(data) 
      // setLoading(false)
    }

    if (session?.user.id)fetchPosts()
  }, [session?.user.id]) 

  // const fetchPosts = async () => {
  //   const response = await fetch(`/api/users/${session?.user.id}/posts`);
  //   const data = response.json()

  //   setPosts(data)
  // }

  const handleEdit = async (post) => {
    router.push(`/update-post?id=${post._id}`) //TODO: it pushes the route correctly but it doesnt render because it isnt configured correctly yet
  }

  const handleDelete = async (post) => {

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

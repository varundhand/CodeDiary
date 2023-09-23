"use client"

import { useState,useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router" //TODO: import from "next/navigation"

import MyProfile from "@/components/Profile"

const Profile = () => {
  const {data: session} = useSession()

  const [posts, setPosts] = useState([]);

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
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile

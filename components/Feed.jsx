'use client'

import { useState,useEffect } from "react"

import PostCard from "./PostCard"

// Since PostCardList component will be used within Feed Component only, thats why we 
const PostCardList = ({data, handleTagClick}) => {
  console.log(data);
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => { // for each single post, we render a seperate PostCard Component
        <PostCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      })}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  
  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json()
      console.log(data);
      setPosts(data) //! API REQUEST NOT WORKING
    }

    fetchPosts()
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text" 
          placeholder="Search for different posts and users"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PostCardList
        data={posts}
        handleTagClick = {() => {}}
      />
    </section>
  )
}

export default Feed

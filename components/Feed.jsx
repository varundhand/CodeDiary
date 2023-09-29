'use client'

import { useState,useEffect } from "react"

import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import SkeletonPost from "./skeleton/SkeletonPost";


// Since PostCardList component will be used within Feed Component only, thats why we 
const PostCardList = ({data, handleTagClick}) => {
  console.log(data);
  return (
    <div className="mt-16 prompt_layout">
      {data ? data.map((post) => ( // for each single post, we render a seperate PostCard Component
        <PostCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
        )) : (
          <div>Loading...</div>
        )}
      
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // const dispatch = useDispatch()
  // const isLoading = useSelector((state) => state.loading.isLoading)
  
  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json()
      // console.log(data);
      setPosts(data) 
      setLoading(false)
    }

    fetchPosts()
  }, []) 

  return (
    <section className="feed ">
      <form className="relative w-64 md:w-96 flex-center">
        <input 
          type="text" 
          placeholder="Search for different posts and users"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {loading ? 
        <div className="mt-16 w-full  grid place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-screen-xl">
          {[...Array(12).keys()].map(i => {
            return  <SkeletonPost key={i} class="m-2 " />
          })}
        </div>
       : (
        <PostCardList
          data={posts}
          handleTagClick = {() => {}}
        />
      )}
    </section>
  )
}

export default Feed

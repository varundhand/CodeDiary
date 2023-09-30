import { useSession } from "next-auth/react";
import PostCard from "./PostCard"
import { useEffect } from "react";
import { useState} from "react";

const Profile = ({name, desc,data,handleEdit,handleDelete}) => {
  const {data: session} = useSession()
  const [profileData, setProfileData] = useState(data);
  console.log(session)
  // set dataSessions to redux posts

  useEffect(() => {
    // Fetch data when session and session.user.id are available
    if (session?.user.id) {
      const fetchPosts = async () => {
        const response = await fetch(`api/users/${session.user.id}/posts`);
        const newData = await response.json();
        setProfileData(newData);
      };
      fetchPosts();
    }
  }, [session]);

  
  console.log(data);
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="orange_gradient">{name} Profile</span> 
      </h1>
      <p className="desc text-left">
        {desc}
      </p>
      <div className="mt-16 prompt_layout">
        {profileData.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleEdit={() => {handleEdit && handleEdit(post)}}
            handleDelete={() => {handleDelete && handleDelete(post)}}
          />
        ))}
      </div>

      
    </section>
  )
}

export default Profile

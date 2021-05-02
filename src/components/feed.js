import React,{useEffect,useState} from 'react'
import './feed.css'
import Tweet from './tweet'
import Post from './post'
import db from '../firebase'
import Flipmove from 'react-flip-move'


function Feed() {
  const[posts,setposts]=useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setposts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  
    return (
        <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
  
        <Tweet/>

        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
           
            message={post.message}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
    
       

       
      
            
        </div>
    )
}

export default Feed

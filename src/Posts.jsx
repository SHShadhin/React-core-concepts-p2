import { use } from "react";
import Post from "./Post";

export default function Posts({ postsPromise }) {
  const posts = use(postsPromise) // post er all data store kora hoise eikhane
  console.log(postsPromise)
  const postStyle = {
    border: '3px solid teal',
    padding: '20px',
    margin: '20px',
    borderRadius: '20px',
  };
  return (
    <div style={postStyle}>
      <h1>All Posts Here {posts.length} </h1>
      {
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  );
}
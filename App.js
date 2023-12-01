import logo from "./logo.svg";

// src/App.js
import React, { useState } from "react";
//import "./App.css";

const Post = ({ username, image, likes, onLike }) => (
  <div className="post">
    <img src={image} alt={`${kunal_1176}'s post`} />
    <div className="post-info">
      <p>{kunal_1176}</p>
      <button onClick={onLike}> ❤️ {likes}</button>
    </div>
  </div>
);

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "kunal_1176",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FInstagram_logo_2022.svg%2F1200px-Instagram_logo_2022.svg.png&tbnid=wixPpk8FDwbMiM&vet=12ahUKEwjIuqunve2CAxVGTWwGHWaYAaYQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInstagram&docid=QPFtXn7VaJY67M&w=1200&h=1200&q=instagram&ved=2ahUKEwjIuqunve2CAxVGTWwGHWaYAaYQMygAegQIARBu",
      likes: 0,
    },
    {
      id: 2,
      username: "2",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.commonsensemedia.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fratio_16_9_large%2Fpublic%2Fblog%2F2022-pug-instagram.jpg&tbnid=pHeieV733i2H1M&vet=12ahUKEwjIuqunve2CAxVGTWwGHWaYAaYQMygFegQIARB4..i&imgrefurl=https%3A%2F%2Fwww.commonsensemedia.org%2Farticles%2Fparents-ultimate-guide-to-instagram&docid=D03_qgFhXk-uyM&w=700&h=394&q=instagram&ved=2ahUKEwjIuqunve2CAxVGTWwGHWaYAaYQMygFegQIARB4",
      likes: 0,
    },
    // Add more posts as needed
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="App">
      <h1>Instagram Clone</h1>
      <div className="feed">
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            image={post.image}
            likes={post.likes}
            onLike={() => handleLike(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

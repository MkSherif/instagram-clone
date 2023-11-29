import React, { useState } from "react";
import Post from "./posts/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import './Suggestions.css'
function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Naruto",
      postImage:
        "https://d.wattpad.com/story_parts/175/images/143fe3bd617cc7c0.gif",
      likes: '459,890',
      timestamp: "1h",
      comment:'Minato and Obito’s clash was a breathtaking spectacle, a dance of speed and strategy that kept us on the edge of our seats.',
    },
    {
      user: "sukuna",
      postImage:
        "https://animemotivation.com/wp-content/uploads/2021/03/gojo-vs-sukuna-gif.gif",
      likes: '4,329,798',
      timestamp: "6h",
      comment:'Sukuna and Gojo’s battle was a whirlwind of power and cunning, a testament to their unparalleled abilities in the Jujutsu world.',
      
    },
    {
      "user": "Minato Namikaze",
      "postImage": "https://media.giphy.com/media/Ae8KCy7nwcb5u/giphy.gif",
      "likes": "300,000",
      "timestamp": "2h",
      "comment": "The fight between Naruto and Pain was truly epic. The animation and the emotions were top-notch."
    },
    {
      "user": "Obito Uchiha",
      "postImage": "https://i.pinimg.com/originals/57/a4/48/57a44860cbbd9522339a092735f1e73f.gif",
      "likes": "500,000",
      "timestamp": "3h",
      "comment": "The bond between Naruto and Sasuke is one of the most complex and interesting in the entire series."
    },
    {
      "user": "Kakashi Hatake",
      "postImage": "https://i.pinimg.com/originals/6e/ca/47/6eca470b57e40f6e9ae827659e31f2bd.gif",
      "likes": "450,000",
      "timestamp": "4h",
      "comment": "The Fourth Great Ninja War showcased the power and determination of the shinobi world."
    },    
    {
      user: "devil",
      postImage:
        "https://th.bing.com/th/id/OIP.W3ceLK3HLoU5qXnJL_9PdQHaEK?pid=ImgDet&rs=1",
      likes: '1,409',
      timestamp: "9h",
      comment:'...',
    },
    {
      user: "boat",
      postImage:
        "https://media.giphy.com/media/xCJ34SXmGFplK/giphy.gif",
      likes: 189,
      timestamp: "2d",
      comment:'let go ....',
    },
  ]);

  const [suggestion, setSuggestion]= useState([
    { name: "Mohan", relation: 'New to Instagram' },
    { name: 'Karthik', relation: 'New to Instagram' }, 
    { name: 'Neha', relation: 'New to Instagram' } ,
     { name: 'Priya', relation: 'Suggested for you' }, 
     { name: 'Anjali', relation: 'Suggested for you' },  
     { name: 'Vikram', relation: 'Suggested for you' }, 
     { name: 'Raj', relation: 'Follows you' },
     { name: 'Lakshmi', relation: 'Follows you' },
    
    ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              comment={post.comment}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
      <div className="suggestions_title">
      <div className="suggestion_head">
      Suggested for you
      </div>      
      <button className="suggestion_btn">See All</button>
      </div>
        {suggestion.map((suggestions) => (
          <Suggestions 
          name={suggestions.name}
          relation={suggestions.relation}
         />
        ))}       
      </div>
    </div>
  );
}

export default Timeline;